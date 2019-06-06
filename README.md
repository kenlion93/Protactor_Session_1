# Protactor_Session_1

- Instell Node JS and Visual Studio Code
- Install Typescript
-- npm init -y
-- npm insall typescript -g
-- npm insall @type/node --save-dev
-- tsc --init

- Import libary
npm install fs

Run
1. tsc HellowWorld.ts => tranfer to a js file
2. node HellowWorld.js

VAR >< Let

let index = 0, chi hieu trog pham vi 1 block {}
var index = 0, la bien global cho toan file, ngoai or trong {} deu xai duoc

-------EX1-------
function sumTownumber(a:number, b:number){
let sum = a + b
return sum
}

console.log("Sum of 2 number:"+ sumTownumber(5,6))

-------EX2-------
function evenNumber(a:number){
if (a%2 == 0){
    console.log(a + " is even number")
}
else
    console.log(a + " is odd number")
}
evenNumber(5)


-------EX3-------
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

-------EX4-------


