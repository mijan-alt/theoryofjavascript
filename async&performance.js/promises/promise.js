// what the fuck is promises

/**Usually we wrap later continuation of our program into a function called a callback. then 
 * we pass that function into an utiliity(third party most of times) and then we expect that 
 * that third party function will do the right thing in the invocation of our callback. 
 * This is called inversion of control since we are handing over invocation of our precious callback
 * to some foreign code.
 * 
* well,what if... instead instead of inverting control to another function, we give our main program the ability
to know when a task finishes and then let our code decide what to do next

BEST ANALOGY FOR PROMISES

You go to a eatery called pizza jungle to get pizza. you go to the cashier to order for it and you pay a cash
for it. let's assume people came there before you, what that means is that you won't get your pizza
immediately. The cashier hands you a ticket containing some unique code and the kind of  pizza. That ticket
is the promise. That ticket is an indirect way of the cashier promising you that you will get your pizza
so you hold on to that promise. Shortly after , you hear your code called out by the cashier, you jump in excitement
and you run the counter. Your freshly prepared, hot pizza is ready. The promise has been resolved. 
A promise is something that always gets resolved in the later. there has to be some waiting.
 */

/**let us use our knowledge of promises to add two number. you have a function that takes two promises,
 * xpromise and ypromise. these promise represent the numbers we need to add. They are not the actual numbers
 * The same way the ticket the cashier gave you in pizza jungle is just a promise to get pizza, but not actually
 * the pizaa. the add function returns a single promise that will be resolved when the other promises have been
 * resolved. That promise is an array of the two promises(xPromise and yPromise).
 * 
 * Now when that promise has been resolved, we will now have a function that will take the array of he values
 * returned by the promise and then we add them together.
 * 
 * Promise.all in line 39 creates a promise which is waiting for xPromise
 * and yPromise to resolve
 */

function add(xPromise,yPromise) {
    // `Promise.all([ .. ])` takes an array of promises,
    // and returns a new promise that waits on them
    // all to finish
    return Promise.all( [xPromise, yPromise] )
    // when that promise is resolved, let's take the
    // received `X` and `Y` values and add them together.
    .then( function(values){
    // `values` is an array of the messages from the
    // previously resolved promises
 return values[0] + values[1];
} );
}
// `fetchX()` and `fetchY()` return promises for
// their respective values, which may be ready
// now or later.
add( fetchX(), fetchY() )
// we get a promise back for the sum of those
// two numbers.
// now we chain-call `then(..)` to wait for the
// resolution of that returned promise.
.then( function(sum){
console.log( sum ); // that was easier!
} );


/**promises provides a better way of 
 * composing and encapsulating future values */