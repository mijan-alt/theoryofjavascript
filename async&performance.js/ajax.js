$.post('/comboMeal')
$.post('/fries')

$('button').click(function(){
    
let order = {
    mainMeal:'cheeseburger',
    drink: 'Pepsi',
    price: 6,
    exceptions: ''
};


$.post('/combomeal', order, function(){
    alert('Next customer please')
})
})

/**first we need to know what the customer needs
 * and then he tell us it is a combomeal, that is going
 * to make the first argument of POST. Second , the 
 * kitchen staffs have to know what exactly he wants included
 * in the combo. that is where DATA is needed. so we have the order variable 
 * as the second argument to the post request. next we need a way to tell the customer
 * that his or her order has been submitted. That is when we need a callback.
 * and it is added as  a third argument to POST. Normally in a web application, you 
 * will have button such that when clicked , the request will be submitted and the call
 * back will run
 */