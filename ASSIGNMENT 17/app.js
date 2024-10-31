// //                                                 PDF 1

// //                                               QUESTION NO:01

// function power(a, b) {
//     return Math.pow(a, b);
// }
// console.log(power(2, 3)); 

// //                                               QUESTION NO:02

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }
// console.log(isLeapYear(2020)); 
// console.log(isLeapYear(2021)); 

// //                                               QUESTION NO:03

// function calculateArea(a, b, c) {
//     var s = (a + b + c) / 2;
//     return Math.sqrt(s * (s - a) * (s - b) * (s - c));
// }
// console.log(calculateArea(3, 4, 5));

// //                                               QUESTION NO:04 

// function calculateMarks(marks) {
//     const average = marks.reduce((a, b) => a + b) / marks.length;
//     const percentage = (marks.reduce((a, b) => a + b) / (marks.length * 100)) * 100;
//     return { average: average.toFixed(2), percentage: percentage.toFixed(2) + '%' };
// }
// console.log(calculateMarks([75, 80, 85])); 

// //                                               QUESTION NO:05

// function customIndexOf(str, char) {
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === char) {
//             return i;
//         }
//     }
//     return -1
// }
// console.log(customIndexOf("hello", "e")); 

// //                                               QUESTION NO:06

// function deleteVowels(sentence) {
//     return sentence.replace(/[aeiou]/gi, '');
// }
// console.log(deleteVowels("Hello World")); 

// //                                               QUESTION NO:07

// function countSuccessiveVowels(text) {
//     let count = 0;
//     for(let i = 0; i < text.length - 1; i++) {
//         if("aeiouAEIOU".includes(text[i]) && "aeiouAEIOU".includes(text[i + 1])) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countSuccessiveVowels("Pleases read this application and give me gratuity"));

// //                                               QUESTION NO:08

// function convertDistance(km) {
//     return {
//         meters: km * 1000,
//         feet: km * 3280.84,
//         inches: km * 39370.1,
//         centimeters: km * 100000
//     };
// }
// console.log(convertDistance(1)); 

// //                                               QUESTION NO:10

// function calculateOvertimePay(hoursWorked) {
//     const overtimeRate = 12.00;
//     return hoursWorked > 40 ? (hoursWorked - 40) * overtimeRate : 0;
// }

// console.log(calculateOvertimePay(45)); 


//                                                    PDF 2

//                                               QUESTION NO:1

//                                               QUESTION NO:2

//                                               QUESTION NO:3

//                                               QUESTION NO:4

//                                               QUESTION NO:5
