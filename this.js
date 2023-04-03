function identify() {
    return this.name.toUpperCase();
   }
   function speak() {
    var greeting = "Hello, I'm " + identify.call( this );
    console.log( greeting );
   }
   var me = {
    name: "Kyle"
   };
   var you = {
    name: "Reader"
   };
   identify.call( me ); // KYLE
   identify.call( you ); // READER
   speak.call( me ); // Hello, I'm KYLE
   speak.call( you ); // Hello, I'm READER


   /**another way od doing writing the above code */

   function identify(context) {
    return context.name.toUpperCase();
   }
   function speak(context) {
    var greeting = "Hello, I'm " + identify( context );
    console.log( greeting );
   }
   identify( you ); // READER
   speak( me ); // Hello, I'm KYLE

   /**
    * Rules to consider when investigating the call site inorder
    * to determine where the this keyword is pointing to
    * 
    * 1.) Default binding: this is rule is used when there is a standalone
    * function invocation
    */

function foo(){
    console.log(this.a);
   }
   var a =2;
   
   foo();

   function foo() {
    "use strict";
    console.log( this.a );
   }
   var a = 2;
   foo();
    
   function foo() {
    console.log( this.a );
   }
   var obj = {
    a: 2,
    foo: foo
   };
   obj.foo(); 

   function foo() {
    console.log( this.a );
   }
   var obj2 = {
    a: 42,
    foo: foo
   };
   var obj1 = {
    a: 2,
    obj2: obj2
   };
   obj1.obj2.foo();


   function foo() {
    console.log( this.a );
   }
   var obj = {
    a: 2,
    foo: foo
   };
   var bar = obj.foo;

   var a = "oops, global"; 
   bar(); //"oops, global"


   function foo() {
    console.log( this.a );
   }
   function doFoo(fn) {
    
    fn(); 
   }
   var obj = {
    a: 2,
    foo: foo
   };
   var a = "oops, global"; 
   doFoo( obj.foo ); 

   function foo() {
    console.log( this.a );
   }
   var obj = {
    a: 2
   };
   foo.call( obj );

   function foo() {
    console.log( this.a );

   }
   
   var obj = {
    a: 2
   };
   var bar = function() {
    foo.call( obj );
};
bar(); // 2
setTimeout( bar, 100 ); // 2 

function foo(something){
    console.log(this.a, something);
    return this.a + something
}

var obj= {
    a:2
}

var bar = function(){
    return foo.apply(obj, arguments);
}

console.log(bar(3));
   
var b= bar(3);
console.log(b);


function foo(something) {
    console.log( this.a, something );
    return this.a + something;
   }
   var obj = {
    a: 2
   };
   var bar = foo.bind( obj );
   var b = bar( 3 ); // 2 3
   console.log( b ); // 5

   function foo(el) {
    console.log( el, this.id );
   }
   var obj = {
    id: "awesome"
   };
   
   [1, 2, 3].forEach( foo, obj );

   function foo(el) {
    console.log( el, this.id );
   }
   var obj = {
    id: "awesome"
   };
   // use `obj` as `this` for `foo(..)` calls
   [1, 2, 3].forEach( foo, obj );
   // 1 awesome 2 awesome 3 awesome

   function foo(a) {
    this.a = a;
   }
   var bar = new foo( 2 );
   console.log( bar); 



   function foo(something) {
    this.a = something;
   }
   var obj1 = {
    foo: foo
   };

   var obj2 = {};

   obj1.foo( 2 );
   console.log( obj1.a ); // 2

   obj1.foo.call( obj2, 3 );
   console.log( obj2.a ); // 3
   
   var bar = new obj1.foo( 4 );
   console.log( obj1.a ); // 2
   console.log( bar.a ); // 4


   function foo(something) {
    this.a = something;
   }
   var obj1 = {};
   var bar = foo.bind( obj1 );
   bar( 2 );
   console.log( obj1.a ); // 2
   var baz = new bar( 3 );
   console.log( obj1.a ); // 2
   console.log( baz.a ); // 

   function foo() {
    console.log( this.a );
   }
   var a = 2;
   foo.call( null ); // 2

   function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
   }
   
   foo.apply( null, [2, 3] ); // a:2, b:3

   foo(...[2,3]);

   function foo(a,b) {
    console.log( "a:" + a + ", b:" + b );
   }
   // our DMZ empty object
   var ø = Object.create( null );
   // spreading out array as parameters
   foo.apply( ø, [2, 3] ); // a:2, b:3

   function foo() {
    console.log( this.a );
   }
   var a = 2;
   var o = { a: 3, foo: foo };
   var p = { a: 4 };
   o.foo(); // 3
   (p.foo = o.foo)(); // 2


   function foo() {
    // return an arrow function
    return (a)=>{
    // `this` here is lexically inherited from `foo()`
    console.log( this.a );
    };
   }

   var obj1 = {
    a: 2
   };
   var obj2 = {
    a: 3
   };
   var bar = foo.call( obj1 );
   bar.call( obj2 ); // 2, not 3!


var strObject = new String( "I am a string" );
typeof strObject; // "object"
strObject instanceof String; // true

var strPrimitive = "I am a string";
typeof strPrimitive; // "string"
strPrimitive instanceof String; // false


var myObject = {
    a: 2
   };

var myObject = {};
Object.defineProperty( myObject, "a", {
 value: 2,
 writable: false, // not writable!
 configurable: true,
 enumerable: true
} );

myObject.a = 3;
myObject.a; // 2
   

var myObject = {
    a: 2
   };
   Object.preventExtensions( myObject );
   myObject.b = 3;
   myObject.b; // undefined


   var myObject = {
    // define a getter for `a`
    get a() {
    return 2;
    }
   };
   
   Object.defineProperty(
    myObject, // target
    "b", // property name
    { // descriptor
    // define a getter for `b`
    get: function(){ return this.a * 2 },
    // make sure `b` shows up as an object property
    enumerable: true
    }
   );
   myObject.a; // 2


   var myObject = {
    a: 2
   };
   ("a" in myObject); // true
   ("b" in myObject); // false
   
   myObject.hasOwnProperty( "a" ); // true
   myObject.hasOwnProperty( "b" ); // false


var myArray = [ 1, 2, 3 ]; 
for (var v of myArray) {
 console.log( v );
}

var myArray = [1, 2, 3];
for (var i = 0; i < myArray.length; i++) {
 console.log( myArray[i] );
}

class CoolGuy {
    specialTrick = nothing
    CoolGuy( trick ) {
    specialTrick = trick
    }
    showOff() {
    output( "Here's my trick: ", specialTrick )
    }
   }

   Joe = new CoolGuy( "jumping rope" )
   Joe.showOff() // Here's my trick: jumping rope
   

   class Vehicle {
    engines = 1
    ignition() {
    output( "Turning on my engine." );
    }
    drive() {
    ignition();
    output( "Steering and moving forward!" )
    }
   }
   
   class Car inherits Vehicle {
    wheels = 4;
    
    drive() {
    inherited:drive()
    output( "Rolling on all ", wheels, " wheels!" )
    }
   }
   class SpeedBoat inherits Vehicle {
    engines = 2
    ignition() {
    output( "Turning on my ", engines, " engines." )
    }
    pilot() {
    inherited:drive()
    output( "Speeding through the water with ease!" )
    }
   }