//                         ASSIGNMENT 14

//                                                 Question No:01


function showDateTime() {
    console.log(new Date());
}
showDateTime();

//                                                 Question No:02

function greetUser(firstName, lastName) {
    console.log(`Hello, ${firstName} ${lastName}!`);
}
greetUser('Wasif', 'khan');

//                                                 Question No:03

function addNumbers(num1, num2) {

    return num1 + num2;
}
console.log(addNumbers(5, 10));


//                                                 Question No:04

function calculator(num1, num2, operator) {
    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num1 / num2;
        default: return 'Invalid operator';
    }
}
console.log(calculator(5, 3, '+'));

//                                                 Question No:05

function square(num) {
    return num * num;
}
console.log(square(4));

//                                                 Question No:06

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}
console.log(factorial(5));

//                                                 Question No:07

function displayCounting(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}
displayCounting(1, 10);

//                                                 Question No:08

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(x) {
        return x * x;
    }
    return Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
}
console.log(calculateHypotenuse(3, 4));

//                                                 Question No:09

function areaOfRectangle(width, height) {
    return width * height;
}
console.log(areaOfRectangle(5, 10));

//                                                 Question No:10

function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome('madam'));

//                                                 Question No:11

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords('the quick brown fox'));

//                                                 Question No:12

function longestWord(str) {

    return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest);
}
console.log(longestWord('Web Development Tutorial'));

//                                                 Question No:13

function countOccurrences(str, letter) {
    return str.split(letter).S - 1;
}
console.log(countOccurrences('JSResourceS.com', 'o'));

//                                                 Question No:14

function calcCircumference(radius) {
    console.log(`The circumference is ${2 * Math.PI * radius}`);
}

function calcArea(radius) {
    console.log(`The area is ${Math.PI * radius * radius}`);
}

calcCircumference(5);
calcArea(5);
