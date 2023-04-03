/**the more there is a divergence between the way our brain works
 * and the way our code works, the more difficult it is to maintain
 * or even explain the code.
 * 
 * some people think they are good multitasking, but that's not
 * completely true. multitasking will mean doing carring out two
 * or more process simultaneously. while this might seem likely,
 * what people actually do is switching quickly between two tasks
 * in a way that seems very fluid which still gives an impression 
 * of simultaneous operation. for instance , while writing this
 * document, I can pause for a moment and read a message on my phone
 * and then go back to typing , but the switch was quick. does that
 * mean I multi-tasked in the real sense of 'multitasking'. No
 * 
 * Now this is what concurrency works in js. where you have two
 * or more processes that appears as those that occuring
 * simultaneously when in fact they are just interleaved and happening
 * one after the other
 * 
 * The Js engine is single threaded and so is our brains. Processes
 * are simply added to a single queue and they are executed serially
 * two different processes of different origins might be added to that
 * queue, but only one executes at a time.
 */

/**The only thing worse than not knowing why
some code breaks is not knowing why it worked
in the first place! It’s the classic “house of cards”
mentality: “ */

/**what is the true order of operations here */

doA( function(){
    doB();

    doC( function(){
        doD();
    } )

    doE();
} );

doF();

/** doA() > doF() > doB() > doC() > doE() > doD() */

/**now let's us rearrange our code in a way that reflect the order of operation */
doA( function(){
    doC();
     doD( function(){
        doF();
     })

    doE();
});

doB();

/**doA() > doB() > doC() > doD() > doE()> doF() */
/**but this arrangement works provided that doA and doD are async.
 * if they are synchronous, then the order will again to change
 * 
 */