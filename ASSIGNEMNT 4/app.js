//                                       Question NO.1

// var char = prompt("Enter a character:")
// if (char.length === 1) {
//     if (char >= '0' && char <= '9') {
//         console.log("The input is a number.");
//     }
//     else if (char >= 'A' && char <= 'Z') {
//         console.log("The input is an uppercase letter.");
//     }
//     else if (char >= 'a' && char <= 'z') {
//         console.log("The input is a lowercase letter.");
//     }
    
//     else {
//         console.log("The input is neither a number nor a letter.");
//     }
// } else {
//     console.log("Please enter only one character.");
// }
//                                    Question NO. 2

// var num1 = +prompt("Enter the first integer:");
// var num2 = +prompt("Enter the second integer:");
// if (num1 > num2) {
//     console.log("The larger number is: " + num1);
// } else if (num1 < num2) {
//     console.log("The larger number is: " + num2);
// } else {
//     console.log("Both numbers are equal.");
// }
//                                    Question No.3

// var number = +prompt("Enter a number:");
// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }
//                                     Question No.4

// var char = prompt("Enter a single character in lower case:");
// if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
// console.log(true);
// } 
// else{
//         console.log(false); 
//     }
//                                       Question NO.5

// var correctPassword = "12345";
// var userPassword = prompt("Enter your password:")
// if (userPassword === null || userPassword === "") {
//     console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
//     console.log("Correct! The password you entered matches the original password.");
// } else {
//     console.log("Incorrect password.");
// }
// //                                   Question NO.6

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// }
// else {
//     greeting = "Good evening";
// }

// //                                     Question No. 7

// var time = +prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");
// if (time >= 0 && time <= 2359) 
// {
//     var hours = (time / 100) | 0; 
//     if (hours >= 0 && hours < 12) {
//         console.log("Good morning"); 
//     } else if (hours >= 12 && hours < 17) {
//         console.log("Good afternoon");
//     } else if (hours >= 17 && hours < 21) {
//         console.log("Good evening"); 
//     } else {
//         console.log("Good night");
//     }
// } else {
//     console.log("Invalid time format"); 
// }