//  JAVASCRIPT DECISION-MAKING

// 1. Password Prompt

// const password = prompt('Please enter a new password');

// Password must be 6+ characters
// if (password.length >= 6) {
// Password cannot include space
//   if (password.indexOf(' ') === -1) {
//     alert('Valid password.');
//   } else {
//     alert('Password cannot contain spaces.');
//   }
//   alert('Password is long enough.');
// } else {
//   alert('Password must be 6 or more characters.');
// }

// 2. Random Number Generator
// let randomNum = Math.random();
// if (randomNum < 0.5) {
//   alert('Your number is less than 0.5!');
//   console.log(randomNum);
// } else {
//   alert('Your number is greater than 0.5.');
//   console.log(randomNum);
// }

// 3. Logical Operators, &&, ||
// Finding age to determine entry price
// age = prompt('What is your age?');
// if ((age >= 1 && age < 5) || age > 65) {
//   alert('FREE');
// } else if (age > 5 && age < 10) {
//   alert('$10');
// } else if (age >= 10 && age < 65) {
//   alert('$20');
// } else {
//   alert('Invalid Age!');
// }

// 4. Switch Statements
// const day = 7;
// switch (day) {
//   case 1:
//     alert('Monday');
//     break;
//   case 2:
//     alert('Tuesday');
//     break;
//   case 3:
//     alert('Wednesday');
//     break;
//   case 4:
//     alert('Thursday');
//     break;
//   case 5:
//     alert('Friday');
//     break;
//   case 6:
//   case 7:
//     alert('WEEKEND!!!');
//     break;
//   default:
//     alert('Invalid Number!');
// }

// JAVASCRIPT ARRAYS
// Push: add to end, Pop: remove from end, Shift: remove from start, Unshift: add to start
let movieLine = ['tom', 'nancy', 'pablo', 'oliver', 'eva'];
movieLine.push('peter');
movieLine.pop('nancy');
movieLine.shift('tom');
movieLine.shift('pablo');
movieLine.unshift('VIP');

// Concat
let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
cats.concat(dogs);
let combo = dogs.concat(cats);
