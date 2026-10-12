// const prompt = require("prompt-sync")();

// const n =Number(  prompt("enter you number "));

// for(let i = n; i>=1; i--){
//     console.log(i)
// }

// const prompt = require("prompt-sync")();

// const num =Number(  prompt("enter you number "));

// for( let i = 1; i<=10; i++){
//         console.log(`5 * ${i} = ${num*i}`)

// }

// const prompt = require("prompt-sync")();

// const num = Number(prompt("enter you number "));
// let sum = 0;

// for (let i = 1; i <= num; i++) {
//   sum += i;
// }

// console.log(sum);

// const prompt = require("prompt-sync")();
// const num = Number(prompt("enter you number "));

// for(let i  = 1; i<=num; i++){

//   if(num%i==0){
//         console.log(i)
//   }

// }

// const prompt = require("prompt-sync")();

// const num = Number(prompt("enter you number "));

// let evenSum = 0;
// let oddSum = 0;

// for (let i = 1; i <= num; i++) {
//   if (i % 2 == 0) {
//     evenSum += i;
//   } else {
//     if (i % 2 == !0) {
//       oddSum += i;
//     }
//   }
// }

// console.log("🚀 ~ oddSum:", oddSum);
// console.log("🚀 ~ evenSum:", evenSum);

// const prompt = require("prompt-sync")();

// const a = Number(prompt("enter your first number "));
// const b = Number(prompt("enter your second  number "));
// let evenSum = 0;
// let oddSum = 0;

// if (a > b) {
//   let temp = a;
//   a = b;
//   b = temp;
// }

// for (let i = a; i <= b; i++) {
//   if (i % 2 == 0) {
//     evenSum += i;
//   } else oddSum += i;
// }

// console.log("🚀 ~ evenSum:", evenSum);
// console.log("🚀 ~ oddSum:", oddSum);

let a = 20;
for(let i   = 1; i<=a/2; i++){

    if(a%i==0){
        console.log(i)
    }
}

console.log(a)
