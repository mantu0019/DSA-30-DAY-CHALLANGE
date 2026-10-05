const prompt = require("prompt-sync")();

let p1  = "ram";
let p2 = "shayam";
let temp = 33;
let num2 = 49;


console.log( typeof(p1+temp)) // contestation chipkana
console.log(typeof( temp+num2)) //arithmetic



    let num1 = 33;// operand
    let num2  = 44; // operand

    console.log( "the sum of "+ num1 +" and "+num2 +" is equal to "+ (num1+num2));

1+2+3 
3+3
6

the sum of 33       +num2 +" is equal to "+num1+num2
the sum of 33 and +num2 +" is equal to "+num1+num2
the sum of 33 and 44 +" is equal to "+num1+num2
the sum of 33 and 44  is equal to  "+num1+num2
the sum of 33 and 44 is equal to 33 +num2
 the sum of 33 and 44 is equal to 3344



 let age = Number( prompt("enter your age "));
 console.log(  `your age is ${age}`)
console.log(typeof(age))
 

three type of sweeping method

let a  = 3;  // 4
let b = 4; //3


let temp = a;  // 3
a = b //  4
b = temp  //3

console.log("a",a)
console.log("b",b)


let a = 10;
let b = 20;

console.log("before sweeping a",a)
console.log("before sweeping b",b)
 
a  = a+b // 30;
b = a-b //30-20 => 10
a  = a-b //  30-10 20


console.log("after sweeping a",a)
console.log("after sweeping b",b)



let a = 10;
let b = 20;


[a,b] = [b,a];
console.log("a",a)
console.log("b",b)





