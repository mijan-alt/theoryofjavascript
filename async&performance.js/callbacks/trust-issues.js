// A
ajax( "..", function(){
    // C
   } );
   // B

   /**A and B happens now, but C is kept for later when the ajax request is complete.
    * the problem now is you're handing your callback to a third party library called ajax,
    * and you are left at the mercy of what ajax does with your callback. This called 'inversion control'
    *Even though there are few instances where this can cause a problem, it still does not eliminate
    the threat. 'Inversion of control' revolves around the fact that the 'ajax()' itself is not a function 
    that you wrote, it is just a third party library.
    */

    /** */