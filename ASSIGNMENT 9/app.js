//                                     find the missing number in array

var arr = [1, 2, 3, 4, 5, 7, 8, 9, 10]; 
var n = 10; 

var expectedSum = 0;
for (var i = 1; i <= n; i++) {
    expectedSum += i;
}
var actualSum = 0;
for (var i = 0; i < arr.length; i++) {
    actualSum += arr[i];
}
var missingNumberFound = expectedSum - actualSum;
console.log("The missing number is:", missingNumberFound);
