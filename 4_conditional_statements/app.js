const prompt = require("prompt-sync")();

// let a =  Number( prompt("enter your age "));

// if(a>=18){
//  console.log("valid voter")
// }else{
//     console.log("tum abhi bacha ho ")
// }

// if(a<18){
//   console.log("tum abhi boy")
// }else if(a<=40){
//  console.log("tum jawan ho gye ho ")
// }else{
//     console.log("tum budhde ho gye ho ")
// }

// let a =  Number( prompt("enter your marks "));

//  if(a>=85 && a<=95){
//     console.log("tum top kr gye ho ")
//  }else if(a>75 && a<=84 ){
//     console.log("normal student ho tum")
//  }else if(a>=50 && a<=60){
//     console.log("backbencher ho tum")
//  }else{
//     console.log("fail kr gye ho tum ")
//  }

//  let a =  Number( prompt("enter your first number "));
//  let b =  Number( prompt("enter your second number "));
//   if(a>b){
//     console.log("a is greater than b")
//  }else if (a==b){
//     console.log("both numbers are same")
//  }else{
//     console.log("b is greater than a")
//  }

//  let a =  Number( prompt("enter your first number "));
//  let b =  Number( prompt("enter your second number "));
//  let c =  Number( prompt("enter your third number "));

// if(a>b && a>c){
//     console.log("a is greater than b and c")
// }else if(b>a && b>c){
//     console.log("b sabse bada hai")
// }else if(a==b && b==c && a==c){
//     console.log("tine same hai ")
// }else

// {
//     console.log("c bada hai ")
// }

//  let a =  Number( prompt("enter your first number "));

//  if(a%2==0){
//     console.log("even")
//  }else{
//     console.log("odd")
//  }

// let marks =  Number( prompt("enter your Marks "));

// User se marks lo:

// 90+ → "A"
// 75–89 → "B"
// 50–74 → "C"
// 33–49 → "D"
// below 33 → "Fail"

//   if(marks>=90){
//    console.log("A")
//   }else if (marks>=75 && marks<=89){
//    console.log("B")
//   }else if (marks >= 50 && marks<=74){
//    console.log("C")
//   }else if(marks >= 33 && marks<49){
//    console.log("D")
//   }else{
//    console.log("Fail...")
//   }

// User se temperature lo:

// 40 → "Very Hot"

// 30–40 → "Hot"
// 20–29 → "Normal"
// < 20 → "Cold"
// let temp = Number(prompt("enter your  city temperature "));

// if (temp >= 40) {
//   console.log("very hot");
// }
// if (temp >= 30 && temp <= 39) {
//   console.log("Hot");
// }
// if (temp >= 20 && temp <= 29) {
//   console.log("Normal");
// }
// if (temp <= 19) {
//   console.log("cold");
// }

// let year =200;
// console.log(10%3)

// if(year%4==0 && year%100 !=0){
//    console.log("leap yaer hai ")
// }else if(year%400==0){
//    console.log("leap year")
// }else{
//    console.log("normal year")
// }

// const amount = Number(prompt("enter your amount "));
// let dis = 0;
// if (amount > 0 && amount <= 5000) dis = 0;
// else if (amount > 5001 && amount <= 7000) dis = 5;
// else if (amount > 7001 && amount <= 9000)dis = 10;
// else  dis = 20;

// console.log(`You got a 5% discount of ₹${(amount*dis)/100} on ₹${amount}. Your final amount is ₹${amount-(amount*dis)/100}`);

// if(unit>0 && unit<=100) console.log(`payable amount is ${unit*4.2}`);
// else if (unit >100 && unit<=200){
//    console.log(`payable amount is ${(100*4.2)+((unit-100)*6)}`);
// }else if(unit>200 && unit<=400){
//    console.log(`payable unit is ${(100*4.2)+(100*6)+((unit-200)*8)}`);
// }else if(unit > 400){
//    console.log(`payable amount is ${(100*4.2)+(100*6)+(200*8)+((unit-400)*13)}`);
// }


// let  unit = Number(prompt("enter your bill unit here  "));
//  let amount = 0;

//  if(unit>400){
//     amount = (unit-400)*13;
//     unit = 400

//  }
//  if(unit>200 && unit<=400){
//     amount =  amount+(unit-200)*8
//    unit = 200
//  }
//  if(unit>100 && unit <=200){
//    amount = amount +(unit-100)*6;
//    unit = 100
//  }
 

//   amount = amount +(unit*4.2)
//   console.log("🚀 ~ amount:", amount)

