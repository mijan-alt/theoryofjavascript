
function foo(params){
    x = params[0];
    y= params[1];
    args= params.slice[2]
}


function foo([x,y,...args]){
    console.log(x,y,args);
}

foo([1,2,3]);

