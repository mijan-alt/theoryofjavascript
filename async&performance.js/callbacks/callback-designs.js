/**so we saw what happend in the 'tale of five call backs', and how we added some logic(in form of a latch) to
 *  resolve the the issue. we need to find a better fix and that is done with the use of SPLIT callback

*/
function success(data) {
    console.log( data );
   }

function failure(err){
    console.log(err);
}

ajax( "http://some.url.1", success, failure );
/**so here we have two callbacks. one for succes and one for failure. the split callback is the mechanism used by
 * ES6 promises
*/

//2. error-first style AKA node-style
/**In this method, the first argument of the callback is the error object(if any) and the second
 * argument is the success object. if there is no error, the first argument is set to falsy, but if there
 * is an error, then the first argument becomes a truthy
 * 
 * 
 */
 function response(err,data) {
    // error?
    if (err) {
    console.error( err );
    }
    // otherwise, assume success
    else {
    console.log( data );
    }
   }
   ajax( "http://some.url.1", response );

   /**ohhh.... I forgot to add. None of these callback designs actually solves the problem of a callback
    * being invoked multiple times or even the possibility of a callback not invoked at all
    */