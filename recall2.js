/**understanding prototype
 * protoype is simply the property of an object that references another object.
 * the object that the protoype property references is called the prototype object
 * consider the code
 */
var obj1 = {
    a:2
}

obj2= Object.create(obj1);
/* In line 6, we have a literal object construct called obj1. Obj1 even though not obvious has an 
 * internal property called protoype. In line 10 we are creating a brand new object 'obj2' out of thin air.
 * and we are telling obj2 to use obj1 as its prototype object. In other words we are creating an invisible
 * link between obj2 and obj1. obj1 will supply the base behaviour or properties that will be used by obj2
 */

console.log(obj1.hasOwnProperty('a'));//true
console.log(obj2.hasOwnProperty('a'));//false

/*the hasOwnProperty check on obj2 shows that obj2 does not contain the 'a' property so the new obj2 that
is created is a blank object where has the hasOwnProperty check on obj1 shows that it has the 'a' property 
which is pretty obvious  */

console.log(obj2.a);//2
/*wait!!, this is weird. we have already established that obj2 does not have it own 'a' property. but when
we try to access that same 'a' property , we get the value 2 which shows that the property access was succesfull
so what is going on here. Prototypal look up is going on. when we try to access the 'a' property, the js engine
does not initially find it, so the engine looks up the prototype chain and it finds an object called obj1. that 
object contains the 'a' property we are looking for. so it gets the value. Imagine that obj1 did not even contain
'a', the js engine will look up through the prototype property of obj2 and it will find another object
called Object.prototype. If Object.prototype again has the value 'a', the [[Get]] operation  will return the value
otherwise, a reference error occurs. Note that Object.prototype is the highest on the prototype chain. all
objects in js inherits from this Object.protoype*/

/*INVESTIGATION OF PROTOYPES IN FUNCTION */

function foo(name){
    this.name= name;
}

console.log(foo.prototype)//{}
/* a function like any other object has an internal proptotype property that references an arbitrary object
let us call this function 
*/
var obj3= new foo('mijan');
console.log(obj3); //foo{name: 'mijan'}

/*when we call the function with new, what happens is that a new object is created out of thin air
and a reference to that object is assigned to obj3.  */
console.log(obj3.prototype);
 /* what happens is that the prototype property of obj3 references the same object that foo.prototype references
  */ 

 console.log(foo.prototype==Object.getPrototypeOf(obj3));
 /*line 54 is sought of saying that obj3 is prototype-linked to the same object that Foo.protoype
 points to. In essence obj3 is is being linked to Foo.prototype. Foo.prototype will supply the base behavior
 needed by obj3  */

/*this strange code will explained in a minute */
 function Foo() {
    // ...
   }
   Foo.prototype.constructor === Foo; // true
   var a = new Foo();
   a.constructor === Foo; // true

   /*In line 62, it is looking as though 'a' has a constructor property that points back to foo.
   so does that make Foo a constructor of our new object 'a'? . the answer is a capital 'NO' . Simply because
   'a' apparently has a constructor property that points back to foo does not mean that foo is the 
   constructor of our object . Js is not a class-oriented language but people are giving it some kind 
   of syntax that tries to mimic other class related languages. the truth is that Foo is just like 
   any other regular function in js. But when we call the Foo function with the new keyword preceding it, 
   then we have a contructor call, but inheritly, Foo is NOT a constructor. */

/*is NothingSpecial a constructor */
   function NothingSpecial() {
    console.log( "Don't mind me!" );
   }
   var a = new NothingSpecial();
   // "Don't mind me!"
   a; // {}

   /*the answer is a no! it is just a plain function but because of the way NothingSpecial was called 
   with the new keyword behind it, it creates a new object called 'a' as a side effect. all we can say that the
   function call is a 'constructor' call but the function itself is not a constructor */
   

   /**constructor arguments */

   function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // create a new prototype object
var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!

/*line 93 might just be another proof that a1 was not constructed by Foo. 
when you compare line 93 with line 104 of the code below. It seems contradictory*/

function Foo() {
    // ...
   }
   Foo.prototype.constructor === Foo; // true
   var a = new Foo();
   a.constructor === Foo; // true

   /*first of all, I have to correct an impression here. the object 'a' does not have a constructor
   property. the fact that it seem like a constructor appear in 'a' is as a result of delegation. 
   The constructor property can only be found in the default Foo.prototype. so the js engine simply looked
   up the prototype chain and found a constructor property in Foo.prototype. that constructor property 
   itself points to Foo and that is why line 104 outputs true *
    
   but why does line 93 output false for the same comparison? ( a.constructor== Foo). The reason is because
   only the default foo.protoype object has a construtor property. But in line 91, we have created our own
   custom prototype object. and that object does not have a constructor property. because we cannot find
   .constructor in foo.prototype, we delegate the search to a higher prototype object called 'Object.prototype'
   (the highest in the prototypal chain). That object has a .constructor in it which points to the built-in 
   object function Object()
   */

   /*the point is that a.constructor can point anywhere. In the first case it is pointing to foo.
   In the second case, it is pointing to the built in Object() */

   function Foo(name) {
    this.name = name;
   }
   Foo.prototype.myName = function() {
    return this.name;
   };
   function Bar(name,label) {
    Foo.call( this, name );
    this.label = label;
   }
   // here, we make a new `Bar.prototype`
   // linked to `Foo.prototype`
   Bar.prototype = Object.create( Foo.prototype );
   // Beware! Now `Bar.prototype.constructor` is gone,
   // and might need to be manually "fixed" if you're
   // in the habit of relying on such properties!
   Bar.prototype.myLabel = function() {
    return this.label;
   };
   var a = new Bar( "a", "obj a" );
   a.myName(); // "a"
   a.myLabel(); // "obj a"