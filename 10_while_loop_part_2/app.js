// let n = 123
// let num = n;
// let sum = 0;
// while (num > 0) {
//   let digit = num % 10;
//   sum = sum + digit;
//   num = Math.floor(num / 10);
// }

// console.log(sum);

// let n = 7;
// let num = n;
// let square = n * n;
// let count = 0;
// while (num > 0) {
//   count++;
//   num = Math.floor(num / 10);
// }

// let divisor = 10 ** count;
// let lastDigit = square % divisor;

// if (n == lastDigit) {
//   console.log("yes");
// } else {
//   console.log("NO");
// }

let num = "03064021";
 
if (num.length == 10) {
  let i = 0;
  let sum = 0;
  while (i < num.length) {
    let digit = Number(num[i]);
    sum += digit * (i + 1);
    i++;
  }
 
  let checkISBM = sum % 11;

  if (checkISBM == 0) {
    console.log("valid ISBM");
  } else {
    console.log("inValid number");
  }
} else {
  console.log("isbm number should be 10 digit");
}
