let arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]; 
let n = 10; 
let expectedSum = (n * (n + 1)) / 2; 

let actualSum = 0;
for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}
let missingNumberFound = expectedSum - actualSum;
console.log("The missing number is:", missingNumberFound); 