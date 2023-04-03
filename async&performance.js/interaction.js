var res = [];
function response(data) {
 res.push( data );
}
// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );

/**the two processes going on here are the two ajax response calls going on in 
 * line 6 and line7. they are concurrent processes because they are occuring simultaneously.
 * however, we are not sure which of the routes will be faster whether it is urll.1 or url1.2.
 * if url.1 gets back data first, then the response function will be fired  and that obtained will be added
 * to the 'res' array in res[0] position , but what if url.2 gets back its data first, it then means that 
 * res[0] will be the data from url.2. so now we have a race condition bug, because depending on how
 * fast the data is fetched from the server, res[0], could be from either url.1 or url.2
 *  
 * 
 * Now in order to solve these challenges associated with ordering, we can be more explicit about how we
 * want the arrangement
 * 
 */

var res = [];

function response(data){
    if(data.url== "http://some.url.1"){
        res[0]=data;
     }
     else if (data.url == "http://some.url.2"){
        res[1]=data;
     }
}

// ajax(..) is some arbitrary Ajax function given by a library
ajax( "http://some.url.1", response );
ajax( "http://some.url.2", response );

/**so now we are saying, when data is ready the response function should first check if
 * the url of that data is http://some.url.1, if it is, we must add that data to the zeroth index
 * position of the array otherwise if the url of that data is  "http://some.url.2" , we must
 * insert that data in the first index position of the res array. 
 * let's say the data coming from "http://some.url.1" is "mijan" and the data coming from
 * "http://some.url.2" is "richard", res[0] will always be "mijan" and res[1] will always be 
 * "richard" so we have eliminated the race condition 
 * 
 */