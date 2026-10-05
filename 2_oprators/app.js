// //  console.log( Math.floor(  10%3)) // remainder hi deta hai

// // 1232 /10 -->123

// //  console.log(Math.floor(233433434/1000000000))

// console.log(12345%1000) last se number rkhta hia sirf

// console.log(2!=2)

// console.log(!(33>2 || 0>3 || 3>2));

// let a = 12;
// let b = 15;
// let c = 8;
// let d = a++ + --b - c++ + ++a

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// let a = 5;
// let b = ++a + a++ + --a + a--;

// console.log(a, b);
// let x = 10;
// let y = x++ + ++x + x-- + --x;

// console.log(x, y);
// let a = 3;
// let b = 4;

// let c = a++ + ++b + ++a + b-- + a--;

// console.log(a, b, c);

// let x = 5;

// let result = x++ + ++x * x-- - --x;

// console.log(x, result);
// let a = 2;

// let result = ++a + a++ * ++a - a-- + --a;

// console.log(a, result);


// let x = 7;
// let y = x++ + ++x;

// let z = ++x + x-- + y++;

// console.log(x, y, z);

// let a = 1;
// let b = 2;

// let result =
//   a++ +
//   ++b +
//   ++a * b-- +
//   a-- -
//   --b +
//   ++a;

// console.log(a, b, result);
let x = 3;

let result =
  x++ +
  ++x * x-- -
  --x +
  x++ * ++x -
  x--;

console.log("x =", x);
console.log("result =", result);