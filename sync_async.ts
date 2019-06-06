function demoAsync(){
    console.log("hello");

    sayGoodbye(5000)
    console.log("hello again")
}
function sayGoodbye(ms:number){
    let promise = new Promise(function(resolve,reject){
        setTimeOut(function(){
            
        })
    });
}