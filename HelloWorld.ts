console.log("Hello world!!!");
console.log()
//let sum = Fristnum + Secondnum
//console.log("Sum of 2 number:"+ sum)

function sumTownumber(a:number, b:number){
let sum = a + b
return sum
}

console.log("Sum of 2 number:"+ sumTownumber(5,6))
console.log()

function evenNumber(a:number){
let number = a%2
if (number == 0){
    console.log(a + " is even number")
}
else
    console.log(a + " is odd number")
}

evenNumber(5)

console.log()

function countEvennumber (a:number){
    let count = 0
    for (let index=1;index<=a;index++)
    {
        if (index%2 == 0)
        {
            count++
        }
    }
    console.log ("From 1 to " + a + " have " + count + " even number")
}
countEvennumber(10);
console.log()

