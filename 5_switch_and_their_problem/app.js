//  let day   = "asdfsa"
//  ;

//  switch(day){
//    case 1:{
//    console.log("monday");
//    break;
//     }
//    case 2:{
//     console.log("tuesday");
//     break;

//    }
//    case 3:{
//     console.log("web");
//     break;

//    }
//    case 4:{
//     console.log("thus");
//     break;

//    }
//    case 5:{
//     console.log("fri");
//     break;

//    }
//    case 6:{
//     console.log("sat");
//     break;

//    }
//    case 7:{
//     console.log("sun");
//     break;

//    }
//    default:{
//     console.log("enter the number bro")
//    }
//  };

// let a = 1;

// switch (a) {
//   case 3:
//   case 1: {
//     console.log("hello world");
//     break;
//   }
//   case 2:
//     {
//       console.log("namaste duniya");
//       break;
//     }

//     break;

//   default:
//     break;
// }

// let char = "1";

//   if(char.length ==1){

// switch (char) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     {
//       console.log("it is vowel");
//     }

//     break;

//   default:
//     console.log("it is consonants");
//     break;
// }
// }else{
//     console.log("only one char is acceptable ")
// }

let char = "mantu";

let vowel = 0;
let consonants = 0;

for (let i = 0; i < char.length; i++) {
  let ans = char.charAt(i);

  switch (ans) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":vowel++
    break
  
    default:consonants++;
      
  }
}


console.log("vowel is ",vowel );

console.log("consonants is ", consonants);
let a = "mantu"
console.log(a.length)