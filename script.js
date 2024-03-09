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
// let movieLine = ['tom', 'nancy', 'pablo', 'oliver', 'eva'];
// movieLine.push('peter');
// movieLine.pop('nancy');
// movieLine.shift('tom');
// movieLine.shift('pablo');
// movieLine.unshift('VIP');

// Concat
// let cats = ['blue', 'kitty'];
// let dogs = ['rusty', 'wyatt'];
// cats.concat(dogs);
// let combo = dogs.concat(cats);

// Array.prototype.includes
// cats.includes('Blue');
// cats.includes('blue');

// Array.prototype.reverse
// combo.reverse();

// Slice, Splice, Sort
// let colors = ['red', 'orange', 'blue', 'yellow', 'green'];
// colors.slice();
// colors.slice(3);

// colors.splice(3, 1);
// colors.splice(1, 0, 'pink');
// colors.splice(2, 0, 'yellow');

// Reference types and equality testing
// let nums = [1, 2, 3];
// let numsCopy = nums;
// nums.push(4);

// Nested Arrays: Storing Arrays inside other Arrays
// const gameBoard = [
//   ['X', 'O', 'X'],
//   ['O', null, 'X'],
//   ['O', 'O', 'X']
// ];
// gameBoard;
// gameBoard[1];

// JavaScript Object Literals
// Fitbit Application
// Property = Key + Value or Key/Value pairs
// const fitBitData = {
//   totalSteps: 308727,
//   totalMiles: 211.7,
//   avgCalorieBurn: 5755,
//   workoutsThisWeek: '5 of 7',
//   avgGoodSleep: '2:13'
// };

// const person = { firstName: 'Mick', lastName: 'Jagger' };

// const kitchenSink = {
//   model: 'Gourmet',
//   color: 'brass',
//   price: 1024
// };

// const midTerms = { danielle: 96, thomas: 78 };
// midTerms.thomas = 79;
// midTerms.ezra = 89;

// Nesting Arrays and Objects
// const comments = [
//   { username: 'Tammy', text: 'lol', votes: 9 },
//   { username: 'vinylGuy', text: 'The Rega P3 is astounding!', votes: 1203 }
// ];

// Repeating Stuff with Loops
// Intro to For Loops
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 6; i++) {
//   console.log('dabadeedaa');
// }

// for (let i = 1; i <= 10; i++) {
//   console.log('Hello!');
// }

// Looping Over Arrays
// const animals = [
//   'cats',
//   'dogs',
//   'bears',
//   'aardvarks',
//   'zebras',
//   'african weasel',
//   'aardwolf',
//   'emperor penguin'
// ];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }

//   Iterating Arrays Exercise
// I've provided you with an array of strings called people. Loop over the people array with a for loop, printing out each name in uppercase letters.  Your result should look something like:

// SCOOBY
// VELMA
// DAPHNE
// SHAGGY
// FRED
// Hint: use i from your loop as an array index!
// }

// const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].toUpperCase());
// }

// Nested Loops
// for (let i = 1; i <= 10; i++) {
//   console.log(`i is: ${i}`);
//   for (let j = 1; j < 4; j++) {
//     console.log(`     j is: ${j}`);
//   }
// }

// const seatingChart = [
//   ['Kristen', 'Erik', 'Namita'],
//   ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//   ['Yuma', 'Sakura', 'Jack', 'Erika']
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`    ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// While Loops
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const secretCode = 'BabyHippo';

// let guess = prompt('Enter the secret code:');
// while (guess !== secretCode) {
//   guess = prompt('enter the secret code:');
// }
// prompt('Congrats!');

// The Break keyword
// let input = prompt("Hey, say something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("OK YOU WIN!")
