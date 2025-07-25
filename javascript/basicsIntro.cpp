// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const readline = require('readline');
console.log("Try programiz.pro");
var a=10;
var a;
console.log("*****",a, a+"abc", a+'12',a*'12',typeof a);

// let n=parseInt(readline());
// console.log("********",n);

*************************************functions******************************************************

 const calculate= function (a,b) //fun expression not hoisted
 {
    console.log("**",a+b,c);
    var c="pranav";// all the declarations in fun moved upto top of function
 }
 calculate(10,12);
 console.log("*********",calculate)
 
 function data(calculate)// fun can be passes or assigned to variable
 {
     calculate(12,12);
 }
 data(calculate);
 
 function Outer()
 {
     let val=10;
     function inner()
     {
         console.log(val)
     }
      inner(); //fun accesible within this fun;
 }
 Outer();

// ***************************reading iNput*******************************************
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question("Enter a number: ", function(input) {
//   let n = parseInt(input);
//   console.log("You entered:", n);
//   rl.close();
// });

// let name = prompt("Enter your name:");
// console.log("Hello, " + name);

process.stdout.write("Enter your name: ");

process.stdin.on("data", function(data) {
  console.log("Hello, " + data.toString().trim());
  process.exit();
});
// ********************************************************************************
