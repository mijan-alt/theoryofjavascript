/**co-operative concurrency is all about taking an operation that is long an possibly time consuming
 * and then break them down into batches so that other concurrent operations can be interleaved within 
 * the event-loop.
 * 
 * let us consider an ajax reponse that has to run through a list of result and transform them
 * as shown below
 */

 var res = [];
 // `response(..)` receives array of results from the Ajax call
 function response(data) {
  // add onto existing `res` array
  res = res.concat(
  // make a new transformed array with all
  // `data` values doubled
  data.map( function(val){
  return val * 2;
  } )
  );
 }
 // ajax(..) is some arbitrary Ajax function given by a library
 ajax( "http://some.url.1", response );
 ajax( "http://some.url.1", response );

 /**if "http://some.url.1 gets its result first, the entire list
  * will be mapped into res all at once. if the list contains just 
  * a few data points, that won't be a problem, but if the list contains
  * millions of items, the data coming from  "http://some.url.2" will have to
  * wait for a long time until the all the data from "http://some.url.1",
  * has been mapped. and that is not what we want
  * 
  * We want a situation where the the data from  "http://some.url.1"
  * and "http://some.url.2" to be processed concurrently. In other
  * words, the processes of mapping data coming from url.1 and url.2 should
  * be interleaved within the event-loop.
  * 
  * To solve that problem, we instead, break the data into small chunks.
  * if we break down the millions of data coming from url.1 into chunks with each 
  * chunk comprising of 1000 data items, and we also do that for
  * that data coming from url.2, the response call for both url.1 and url.2 data will be
  * mixed or interleaved
  */

  var res = [];
  // `response(..)` receives array of results from the Ajax call
  function response(data) {
   // let's just do 1000 at a time
   var chunk = data.splice( 0, 1000 );
   // add onto existing `res` array
   res = res.concat(
   // make a new transformed array with all
   // `chunk` values doubled
   chunk.map( function(val){
   return val * 2;
   } )
   );
   // anything left to process?
   if (data.length > 0) {
   // async schedule next batch
   setTimeout( function(){
   response( data );
   }, 0 );
   }
  }
  // ajax(..) is some arbitrary Ajax function given by a library
  ajax( "http://some.url.1", response );
  ajax( "http://some.url.2", response );

 /* User inter‐
action, IO, and timers enqueue events on the event queue*/
/**concurrency is when two or more events interleave over time
 * so that from a high level perspective, it might seem that 
 * they are running simultaneously, but at any instant time 
 * nevertheless, only one is running.
 * 
 * 
 * Interaction coordination between concurrent processes are 
 * often done to prevent race conditions.
 */
  