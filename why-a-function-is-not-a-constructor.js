function Foo() {
    // ...
   }
   Foo.prototype.constructor === Foo; // true
   var a = new Foo();
   a.constructor === Foo; // true

/**=========================================================== */
function Foo() { /* .. */ }
Foo.prototype = { /* .. */ }; // create a new prototype object
var a1 = new Foo();
a1.constructor === Foo; // false!
a1.constructor === Object; // true!

/**========================================== */

/**These two set of codes line(1-6) and line(9-13) is intended to explain why functions in javascript
 * are not constructors. let us conider the first code snippet. the check on line 4 shows that foo.prototype
 * has a constructor property which points back to the foo function. Now call the foo function on line
 * 5 and new object called a is created. the check on line 6 is also true. Looking at it superficially,
 * it might seem like 'a' has a constructor property which points back to Foo. Actually, that is a wrong
 * assumption. the .constructor property is only available on the protoype. so 'a' was only able to access
 * '.constructor' via [[prototype]] lookup. but does that mean that 'a' was constructed by 
 * foo?. hold on let us consider the second code snippet.
 * 
 * 'a1.constructor === Foo" comparison in line 12 produced false. now how inconsistent could that be? 
 * the only reason why the first comparison turned out to be true is because the default Foo.prototype 
 * object has by default '.constructor' property. but in the second case , we have created our new Foo.prototyp
 * object. This one we created ourself unfortunately does not have '.constructor' property. so when we enquire of the
 * '.constructor' in 'a', nothing is found. when we move up to 'foo.prototype', '.constructor' is still not
 * found. then we move up to the last on the chain 'Object.prototype'. Object.prototype indeed has a 
 * constructor property , but it points to the built in Object() and not Foo. that is why we have a false in line
 * 12 and a true in linee 13
 * 
 * In conclusion, functions in javascript are not constructors, but you have constructor calls if and only if
 * the functions are called with the 'new' keyword.
 */
