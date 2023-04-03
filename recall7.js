
/*OLOO design pattern*/
function Foo(who) {
    this.me = who;
   }

   Foo.prototype.identify = function() {//create a foo prototype object and add the identity behaviour to it
    return "I am " + this.me;
   };
   function Bar(who) {
    Foo.call( this, who );// call the foo function with an explicit this value
   }
   Bar.prototype = Object.create( Foo.prototype );//create a prototype linkage from bar.prototype to foo.prototype 
   Bar.prototype.speak = function() {
    console.log( "Hello, " + this.identify() + "." );
   };
   var b1 = new Bar( "b1" );//calling the bar automatically calls the foo function with this value set to 'b1'
   var b2 = new Bar( "b2" );
  b1.speak() ;
   b2.speak();


   function Foo(boy) {
     this.boy=boy;
   }
   Foo.prototype.something = function(){
       console.log("I am " + this.boy)

       
   }
   var a1 = new Foo('mijan');
   // later
   if (a1 instanceof Foo) {
    a1.something(); //I am Mijan
   }

   var Foo = { /* .. */ };
var Bar = Object.create( Foo );

var b1 = Object.create( Bar );

// relating `Foo` and `Bar` to each other
Foo.isPrototypeOf( Bar ); // true
Object.getPrototypeOf( Bar ) === Foo; // true
// relating `b1` to both `Foo` and `Bar`
Foo.isPrototypeOf( b1 ); // true
Bar.isPrototypeOf( b1 ); // true
Object.getPrototypeOf( b1 ) === Bar; // true