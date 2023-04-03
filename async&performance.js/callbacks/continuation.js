/**explain how callbacks work 
 * 
 * In Javacript, there is the 'now' part of a program and there
 * the 'later' part of the program. the 'later' chunk of the program
 * is usually wrapped in a function called 'callback'.The callback
 * is usually contains the continuation of the program. say you have
*/

//A
ajax("..", function(){
    //C
})

/**whenever an ajax request is complete, the second argument
 * which is 'callback' is called back into the program from the
 * event loop
 */


/**what is happening in this code below */

//A
setTimeout(function(){
    //C
}, 1000)
//B

/**it says 
 * Do A,
 * setout a timer for 1000 milliseconds
 * do B
 * after the timeout, do C
 */
