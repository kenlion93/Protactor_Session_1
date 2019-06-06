var fs =  require('fs');
var text;

console.log("Start")

fs.readFile('./text.txt', function (err, data){
    console.log("Data ----" + data);
    text = data;
})
console.log("TEXT ---- "+ text);
console.log("End")
// Async
// Await