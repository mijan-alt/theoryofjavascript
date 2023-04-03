var a;
function foo(x) {
 a = x * 2;
 baz();
}
function bar(x) {
 a = x / 2;
 baz();
}
function baz() {
 console.log( a );
}
// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );

/**so we have a broken code like this one. if foo runs first, no problem
 * baz() will be executed and we will have a value assigned to 'a' but when bar()
 * we are now overriding the value of 'a' that we have already from the foo call
 * and then baz() runs within bar to log out that new value of 'a'. so the situation here is
 * that whether it is foo or bar that runs first, the last function that runs overwrites the 
 * initial 'a' value which is not what we want. we provide a solution to this problem using something
 * called latch.
 *
 */

 var a;
 function foo(x) {
  if (!a) {
  a = x * 2;
  baz();
  }
 }
 function bar(x) {
  if (!a) {
  a = x / 2;
  baz();
  }
 }
 function baz() {
  console.log( a );
 }

 foo(2);
 bar(2);

 /**the if (!a) is called a latch. It allows us to make use of only one value of "a"
  * if foo() is called first then we are going to be making use of that 'a'value returned by
  * foo. any other subsequent calls will be ignored
  * 
  */