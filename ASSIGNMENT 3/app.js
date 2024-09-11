// // QUESTION 1
// let cityName = prompt("Enter your city");
// if (cityName.toLowerCase() === "karachi") {
//     document.write("Welcome to the city of lights");
// }

// // QUESTION 2
// let userGender = prompt("Enter your gender");
// if (userGender.toLowerCase() === "male") {
//     document.write("Good Morning Sir!");
// } else {
//     document.write("Good Morning Ma'am!");
// }

// // QUESTION 3
// let trafficSignalColor = prompt("Enter color of road traffic signal");
// if (trafficSignalColor.toLowerCase() === "red") {
//     document.write("Must Stop");
// } else if (trafficSignalColor.toLowerCase() === "yellow") {
//     document.write("Ready to move");
// } else {
//     document.write("Move now");
// }

// // QUESTION 4
// let carFuel = +prompt("Enter fuel in litres");
// if (carFuel < 0.25) {
//     document.write("Please refill the fuel in your car");
// }

// // QUESTION 5
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// // QUESTION 6
// let subject1Marks = +prompt("Enter marks in subject 1");
// let subject2Marks = +prompt("Enter marks in subject 2");
// let subject3Marks = +prompt("Enter marks in subject 3");
// let totalMarks = +prompt("Enter the total marks");
// let percentage = ((subject1Marks + subject2Marks + subject3Marks) / totalMarks) * 100;
// if (percentage >= 80) {
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
//     document.write("Grade is: A-one" + "<br>");
//     document.write("Percentage is: " + percentage + "<br>");
//     document.write("Remarks: Excellent" + "<br>");
// } else if (percentage >= 70) {
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
//     document.write("Grade is: A" + "<br>");
//     document.write("Percentage is: " + percentage + "<br>");
//     document.write("Remarks: Good" + "<br>");
// } else if (percentage >= 60) {
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
//     document.write("Grade is: B" + "<br>");
//     document.write("Percentage is: " + percentage + "<br>");
//     document.write("You need to improve" + "<br>");
// } else {
//     document.write("Total Marks: " + totalMarks + "<br>");
//     document.write("Marks Obtained: " + (subject1Marks + subject2Marks + subject3Marks) + "<br>");
//     document.write("Fail" + "<br>");
//     document.write("Percentage is: " + percentage + "<br>");
//     document.write("Sorry" + "<br>");
// }

// // QUESTION 7
// let secretNumber = Math.floor(Math.random() * 10) + 1; 
// let userGuess = +prompt("Guess the secret number.");
// if (userGuess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (userGuess + 1 === secretNumber) {
//     document.write("Close enough to the correct answer.");
// }

// // QUESTION 8
// let numberToCheck = +prompt("Enter Number");
// if (numberToCheck % 3 === 0) {
//     document.write("Number is divisible by 3");
// }

// // QUESTION 9
// let oddOrEvenNumber = +prompt("Enter Number");
// if (oddOrEvenNumber % 2 !== 0) {
//     document.write("Odd number");
// } else {
//     document.write("Even number");
// }

// // QUESTION 10
// let temperature = +prompt("Enter temperature");
// if (temperature > 40) {
//     document.write("It is too hot outside");
// } else if (temperature > 30) {
//     document.write("The weather today is normal");
// } else if (temperature > 20) {
//     document.write("Today's weather is cool");
// } else if (temperature > 10) {
//     document.write("OMG! today's weather is so cool");
// }

// // QUESTION 11
// let firstNumber = +prompt("Enter First Number");
// let secondNumber = +prompt("Enter Second Number");
// let operator = prompt("Enter Operator");
// if (operator === "+") {
//     document.write(firstNumber + secondNumber);
// } else if (operator === "*") {
//     document.write(firstNumber * secondNumber);
// } else if (operator === "/") {
//     document.write(firstNumber / secondNumber);
// } else if (operator === "-") {
//     document.write(firstNumber - secondNumber);
// } else if (operator === "%") {
//     document.write(firstNumber % secondNumber);
// }
