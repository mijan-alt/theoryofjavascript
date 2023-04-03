var anotherObject = {
    a: 2
   };
   // create an object linked to `anotherObject`
   var myObject = Object.create( anotherObject );
   myObject.a; // 2 

   /**protoytype is an internal property of an object that references
    * another object. 
    * normally when we try access 'a' in anotherObject , a [[Get]] operation is 
    * invoked, but if the get operation does not find 'a', a prototype link is set up 
    * to look for 'a' one level up. line is saying, hey, create a prototype link between
    * anotherObject and myObject
    * 
    * myObject.a does not actually exist but when we make that
    * request, we still have 2, because of the traversal down the 
    * prototype  chain from myObject to anotherObject. if 'a' was not
    * found in anotherObject, the prototype chain of 
    * 'anotherObject' is further consulted.
    */

    var anotherObject = {
        a: 2
       };
       // create an object linked to `anotherObject`
       var myObject = Object.create( anotherObject );
       for (var k in myObject) {
        console.log("found: " + k);
       }
       // found: a
       ("a" in myObject); // true

       myObject.foo = "bar";

       var anotherObject = {
        a: 2
       };

       var myObject = Object.create( anotherObject );
       anotherObject.a; // 2
       myObject.a; // 2
       anotherObject.hasOwnProperty( "a" ); // true
       myObject.hasOwnProperty( "a" ); // false
       myObject.a++; // oops, implicit shadowing!
       anotherObject.a; // 2
       myObject.a; // 3
       myObject.hasOwnProperty( "a" ); // true

      function Foo() {
        // ... 
       }
       Foo.prototype; // { }

       function Foo() {
        // ...
       }
       var a = new Foo();
       Object.getPrototypeOf( a ) === Foo.prototype; // true


       function NothingSpecial() {
        console.log( "Don't mind me!" );
       }
       var a = new NothingSpecial();
       // "Don't mind me!"
       a; // {}
       
       
