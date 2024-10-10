//                                             ASSIGNEMNT NO: 11


//                                              QUESTION NO:01

// var num = parseInt(prompt("Enter a positive integer"));
// console.log("Number: " + num);
// console.log("Round off value: " + Math.round(num));
// console.log("Floor value: " + Math.floor(num));
// console.log("Ceil value: " + Math.ceil(num));

//                                               QUESTION NO:02

// var num = parseFloat(prompt("Enter a negative floating point number"));
// console.log("Number: " + num);
// console.log("Round off value: " + Math.round(num));
// console.log("Floor value: " + Math.floor(num));
// console.log("Ceil value: " + Math.ceil(num));


// //                                               QUESTION NO:03


// var num = parseInt(prompt("Enter a number"));
// console.log("Absolute value: " + Math.abs(num));
// //                                               QUESTION NO:04


// var dice = Math.floor(Math.random() * 6) + 1;
// console.log("Dice value: " + dice);

// //                                               QUESTION NO:05


// var coin = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log("Coin value: " + coin);
// //                                               QUESTION NO:06

// var randomNum = Math.floor(Math.random() * 100) + 1;
// console.log("Random number: " + randomNum);

// //                                               QUESTION NO:07


// var weight = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms)");
// weight = weight.replace(/kgs|kilograms/gi, "");
// console.log("Your weight: " + parseFloat(weight));

//                                               QUESTION NO:08

// var secretNum = Math.floor(Math.random() * 10) + 1;
// var userNum = parseInt(prompt("Enter a number between 1 and 10"));
// if (userNum === secretNum) {
//   console.log("Congratulations! You guessed the secret number.");
// } else {
//   console.log("Sorry, the secret number was " + secretNum);
// }