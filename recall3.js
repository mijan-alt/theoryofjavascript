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

   /**okay , so what is the differnece between */
   Bar.prototype = Object.create( Foo.prototype );
   /*and*/
   Bar.prototype= Foo.prototype;

   /**line 25 creates a prototype object Bar.prototype that is linked to Foo.prototype
    * In line27, no new object is created, we just have another reference to Foo.prototype.
    * so that they are both pointing to to same object. any changes in bar.prototype will affect
    * Foo.prototype in line 27  
    */

/*=========================================================== */

    var anotherObject = {
        cool: function() {
        console.log( "cool!" );
        }
       };

       var myObject = Object.create( anotherObject );
       
       myObject.doCool = function() {
        this.cool(); // internal delegation!
       };
       myObject.doCool(); // "cool!"

       /* ============================ */

       /*In line 43, we have created a new object called myObject that delegates to anotherObject.
       but instead of calling */ myObject.cool /**directly, we add a doCool property to  
       myObject /*that property points to a function which is making a RHS reference to  */ cool
       /*in */ anotherObject
       /**It is not like we could not have just relied on protoypal linkage to call myObject.cool directly,
        * but for the sake of code maintenance from other developer, we create a doCool property instead
        * which points to a function that internally delegates the cool property
*/ 




