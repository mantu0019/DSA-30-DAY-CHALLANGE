// let i = 1;

// do {
//   console.log("hello", i);
//   i++;
// } while (false);

// const prompt = require("prompt-sync")();

// let random = Math.floor(Math.random() * 100 + 1);
// let user;

// do {
//   user = Number(prompt("enter a number 1 and 100 "));
//   if (user > random) console.log("too large");
//   else if (user < random) console.log("too small");
//   else if (user == random) console.log("congratulation you guessed");
//   else console.log("enter any number");
// } while (random != user);

// const prompt = require("prompt-sync")();

// let total = 0;
// let a = 0;
// let b = 0;
// let number  = 0;

// do {
//   console.log("press 1 for add");
//   console.log("press 2 for subs");
//   console.log("press 3 for multi");
//   console.log("press 4 for divide");
//   let n = Number(prompt("press "));
//     switch (n) {
//       case 1:
//         a = Number(prompt(" enter first number"));
//         b = Number(prompt(" enter sec number  "));
//         total = a + b;
//         console.log("addition is: ", total);
//         break;
//       case 2:
//         a = Number(prompt("enter first number"));
//         b = Number(prompt("enter second number"));
//         total = a - b;
//         console.log("subs ", total);
//         break;
//       case 3:
//         a = Number(prompt("enter first number"));
//         b = Number(prompt("enter second number"));
//         total = a * b;
//         console.log("multiple ", total);
//         break;
//       case 4:
//         a = Number(prompt("enter first number"));
//         b = Number(prompt("enter second number"));
//         total = a / b;
//         console.log("divide ", total);
//         break;
//     }

//    number = Number(prompt("press 10 if you continue"));

// } while ( number == 10);

// let prompt = require("prompt-sync")();
// let bill = 0;
// let n = 0;
// do {
//   console.log("press 1 for indian dish");
//   console.log("press 2 for japanese dish");
//   console.log("press 3 for russian dish");
//   let dish = Number(prompt("enter dish number "));

//   switch (dish) {
//     case 1:
//       console.log("press 1 butter masala");
//       console.log("press 2 biryani");
//       console.log("press 3 Masala dosha");
//       n = Number( prompt("enter your number "));

//       switch (n) {
//         case 1:
//           bill = 400;
//           console.log("your bill is ", bill);

//           break;
//         case 2:
//           bill = 500;
//           console.log("your bill is ", bill);

//           break;

//         case 3:
//           bill = 600;
//           console.log("your bill is ", bill);

//           break;

//         default:
//           break;
//       }

//       break;

//     default:
//       break;
//   }
// } while (false);



 
const prompt = require("prompt-sync")();

let bill = 0;
let choice;
let dish;
let quantity;
let orderedDishes = [];

do {
  console.log("\n========== WELCOME TO OUR RESTAURANT ==========");
  console.log("1. Indian Dishes");
  console.log("2. Japanese Dishes");
  console.log("3. Russian Dishes");
  console.log("0. Exit and Generate Bill");

  choice = Number(prompt("\nSelect cuisine: "));

  switch (choice) {
    // =============== INDIAN DISHES ===============
    case 1:
      console.log("\n========== INDIAN MENU ==========");
      console.log("1. Butter Chicken   - Rs. 400");
      console.log("2. Biryani          - Rs. 300");
      console.log("3. Masala Dosa      - Rs. 150");
      console.log("4. Paneer Butter Masala - Rs. 250");
      console.log("5. Chole Bhature    - Rs. 180");
      console.log("6. Samosa           - Rs. 30");

      dish = Number(prompt("\nSelect dish (1-6): "));

      switch (dish) {
        case 1:
          addDish("Butter Chicken", 400);
          break;
        case 2:
          addDish("Biryani", 300);
          break;
        case 3:
          addDish("Masala Dosa", 150);
          break;
        case 4:
          addDish("Paneer Butter Masala", 250);
          break;
        case 5:
          addDish("Chole Bhature", 180);
          break;
        case 6:
          addDish("Samosa", 30);
          break;
        default:
          console.log("Invalid dish selection!");
      }
      break;

    // =============== JAPANESE DISHES ===============
    case 2:
      console.log("\n========== JAPANESE MENU ==========");
      console.log("1. Sushi          - Rs. 500");
      console.log("2. Ramen          - Rs. 350");
      console.log("3. Tempura        - Rs. 400");
      console.log("4. Onigiri        - Rs. 150");
      console.log("5. Takoyaki       - Rs. 250");
      console.log("6. Yakitori       - Rs. 300");

      dish = Number(prompt("\nSelect dish (1-6): "));

      switch (dish) {
        case 1:
          addDish("Sushi", 500);
          break;
        case 2:
          addDish("Ramen", 350);
          break;
        case 3:
          addDish("Tempura", 400);
          break;
        case 4:
          addDish("Onigiri", 150);
          break;
        case 5:
          addDish("Takoyaki", 250);
          break;
        case 6:
          addDish("Yakitori", 300);
          break;
        default:
          console.log("Invalid dish selection!");
      }
      break;

    // =============== RUSSIAN DISHES ===============
    case 3:
      console.log("\n========== RUSSIAN MENU ==========");
      console.log("1. Pelmeni          - Rs. 350");
      console.log("2. Beef Stroganoff  - Rs. 600");
      console.log("3. Borscht          - Rs. 250");
      console.log("4. Blini            - Rs. 200");
      console.log("5. Pirozhki         - Rs. 180");
      console.log("6. Olivier Salad    - Rs. 220");

      dish = Number(prompt("\nSelect dish (1-6): "));

      switch (dish) {
        case 1:
          addDish("Pelmeni", 350);
          break;
        case 2:
          addDish("Beef Stroganoff", 600);
          break;
        case 3:
          addDish("Borscht", 250);
          break;
        case 4:
          addDish("Blini", 200);
          break;
        case 5:
          addDish("Pirozhki", 180);
          break;
        case 6:
          addDish("Olivier Salad", 220);
          break;
        default:
          console.log("Invalid dish selection!");
      }
      break;

    case 0:
      console.log("\nGenerating your final bill...");
      break;

    default:
      console.log("Invalid cuisine selection! Please try again.");
  }
} while (choice !== 0);


// =============== ADD DISH FUNCTION ===============
function addDish(name, price) {
  quantity = Number(prompt("Enter quantity: "));

  if (!Number.isInteger(quantity) || quantity <= 0) {
    console.log("Invalid quantity! Please enter a positive whole number.");
    return;
  }

  let amount = price * quantity;

  bill += amount;

  orderedDishes.push({
    name: name,
    price: price,
    quantity: quantity,
    amount: amount
  });

  console.log("\nDish added successfully!");
  console.log("Dish:", name);
  console.log("Quantity:", quantity);
  console.log("Amount: Rs.", amount);
}


// =============== FINAL BILL ===============
console.log("\n========================================");
console.log("             FINAL BILL");
console.log("========================================");

if (orderedDishes.length === 0) {
  console.log("You did not order anything.");
} else {
  console.log("Dish Name           Qty    Price    Amount");
  console.log("----------------------------------------");

  for (let item of orderedDishes) {
    console.log(
      `${item.name.padEnd(20)} ${String(item.quantity).padEnd(6)} ${String(item.price).padEnd(8)} ${item.amount}`
    );
  }

  console.log("----------------------------------------");
  console.log("Total Bill: Rs.", bill);
}

console.log("Thank you for visiting our restaurant!");
 