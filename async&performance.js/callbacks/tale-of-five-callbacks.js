analytics.trackPurchase( purchaseData, function(){
    chargeCreditCard();
    displayThankyouPage();
   } );

   /**so a developer is building an eccomerce site. Once a buy button is clicked a third party method
    * provide by an analytic tracking company is invoked. Once is the purchase data is ready, a callback function
    * that will charge the customers credit card and display the thank You page is invoked. This looks great and works
    * just as fine
    * 
    * Few days later , Mijan receives a distress call from his boss that the customer who bought an item
    * has been charged 5 times. My heart started running fast. what could have gone wrong.
    * so I made a few changes to the code
    * 
    * 
    * 
    */

   var tracked= false; //Initially the item is not tracked

   analytics.trackPurchase(purchaseData, function(){
    if(!tracked){//if it is true that the product is being tracked
        var tracked= true;//the product is now tracked
        chargeCreditCard();//charge the credit card
        displayThankyouPage()//display thankYou page


    }
   })

   /**so now you see, I added some more logic to prevent further occurence.
    * Initially, when the customer has not clicked 'buy', the product 
    * is not currently tracked. when the customer clicks buy, I have to check
    * if it is true that the product is currently being tracked, if it is, then
    * the product is now being tracked and I can charge the customer's credit card.
    * 
    * when an attempt is made to invoke the callback again, true will be stored in 
    * the tracked variable and (!tracked) will be false, so the callback will not
    * execute.
    * 
    * well, what is the need for all this stress, isn't the third party function suppose
    * to prepare for these kind of problems associated with using it? do we have to
    * invent a logic into every callback that is passed into some third party function 
    * that we cannot trust?
    * 
    * But if I'm able to control a third-party utility like I have done now, is
    * that utility still trust-worthy?
    * 
    * so now, you see that the problem with callback is inversion of control. You are leaving
    * your callback to the mercy of whatever function you pass it into. so whenever you 
    * are passing a callback to a third party function, you must have to add some logic to 
    * to the callback to ensure that it behaves as expected.
    * 
    * TRYING TO SAVE CALLBACKS
    */