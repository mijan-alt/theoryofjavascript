var res = {};

function foo(results) {
    res.foo = results;
   }
   function bar(results) {
    res.bar = results;
   }

   // ajax(..) is some arbitrary Ajax function given by a library
   ajax( "http://some.url.1", foo );
   ajax( "http://some.url.2", bar );

   /**explain why these two function calls are non-interacting?
    * 
    * the reason is simple. whether foo returns it's result first or bar returns
    * it's result first, it really doesn't matter. the only thing is that is the 
    * the property foo might appear before the property "bar" in the res object.
    * that is the only non-determinate behaviour we can expect and that is allowed.
    * the results itself will be assigned to these properties in the object by reason 
   * of the funcition calls will be totally independent of each other
    * 
    * for instance let's say that the result from foo() call is 'mijan' and the result from
    * bar() call is 'richard'. the two possible ways in which our res object will appear 
    * are thus
    */

   res={
    foo:'mijan',
    bar: 'richard'
   }
//or alternatively
res={
    
    bar: 'richard',
    foo:'mijan'
}
/**the only difference is the order in why the property appears in the object. these two 
 * possible arrangements that could occur is what we refer to as non-determinism. but still
 * the function are non-interacting because the result for the foo() call remains 
 * 'mijan' and the result for the bar() call remains 'richard' and it will be so whether or not
 * bar() completed execution first and vice-versa
 */

//               RACE CONDITIONS

/**what the fuck is race conditions? simple it's the idea that these two function are racing
 * to finish their executions. if foo( ) crosses the finish line first, we will have option1(line 28-31)
 * but if bar() crosses the finishing line first, we will have option2( line 33-37). but in this case ,
 * there is no bug as a result of race conditions since we have non-interacting processes.
 */
