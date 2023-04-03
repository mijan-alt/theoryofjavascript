/*$callback function has always been a way of handling asynchronous programming

WHAT IS ASYNCHRONY

js is made up of program chunks. the smallest chunk is javascript. some of the chunks
will execute now, the others will execute later.

asynchronous programming has to do with what is happening in the gap between a currently executing code
and the code that will run later. the code wrapped in later() will be 1000ms after now() has been executed.
that time frame between now and later is what asynchronous programming is all about v
*/

function now(){
    return 21;
}

function later(){
    answer= answer * 2;
    console.log("Meaning of life: ", answer)
}

var answer= now()

setTimeout(later, 1000)

/**the code in the later function will execute after 1sec. the code wrapped in that later function will execute later
 * when ever you wrap a portion of your code in your function and you specify that the code should be
 * executed in response to some events like timer, ajax, you will be introducing asynchronoy into your program.
 * 
 * so line 13 and 14 runs later.
 * 
 * 
 * 
 */

var a = {
    index: 1
};

console.log(a);
a.index++;


var a, b;
function foo(x) {
 a = x * 2;//a=4
 baz();//NaN
}
function bar(y) {
 b = y * 2;//b=4
 baz();//(a+b=4+4=8)
}
function baz() {
 console.log(a + b);
}
 foo(2);
 bar(2);

/**
 * when foo runs first, baz() cannot complete it's execution because at the instant, b does not
 * yet have a value. so when we run baz() inside of foo, we are trying to add undefined to a number 
 * which will be NaN. but of course foo has to run to completion so we have that 
 * a=4 by the time foo runs completely. when bar starts running, we now have our b value so that
 * "b=4". At this point baz() can run since it has all the parameters it needs to run. even if bar()
 * was called first, we still have the same challenge because, a will not be available. This is actually
 * a broken code
 */

 var a, b;
 function foo(x) {
  a = x * 2;
  if (a && b) { //if a and b are available,
  baz(); //invoke baz
  }
 }
 function bar(y) {
  b = y * 2;
  if (a && b) {
  baz();
  }
}

function baz() {
    console.log( a + b );
   }

   foo(2);
   bar(2);

   // ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", foo );
ajax( "http://some.url.2", bar );


   /**so this code snippet provides a solution the NaN error we were having. Inside of foo, 
    * we set a condition that baz should only run if both a and b are available. otherwise, baz will not
    * run. We set the same condition in bar, but by that time, we already have the values of a and b
    * so baz() will run.
    * 
    * In this scenario non-determinism is acceptable because whether foo runs first or baz runs first, the 
    * values of a and b are independent. that is... the value of 'a' returned by the foo function call
    * is independent of the value of 'b' returned by the bar function call.
    * 
    * 
    * The if (a && b) conditional around the baz() call is traditionally
called a gate, because we’re not sure what order a and b will arrive,
but we wait for both of them to get there before we proceed to open
the gate (call baz()). 
    */


