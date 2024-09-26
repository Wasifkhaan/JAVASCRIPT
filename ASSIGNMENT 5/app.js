//                                        Question No.1

// var studentNames = [];

//                                        Question No.2

// var studentData = {
//     names: []
//   };

  
//                                        Question No.3

// var stringArray = ["Alia", "Bazil", "zia", "tahir"];

//                                        Question No.4

// var numbersArray = [1, 2, 3, 4, 5];

//                                        Question No.5

// var booleanArray = [true, false, true, false];

//                                        Question No.6

// var mixedArray = [42, "hello", true, { name: "Alice", age: 30 }, [1, 2, 3]];

//                                        Question No.7

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
// document.write("<h1>Education Qualifications in Pakistan</h1>");
// document.write("<ol>");
// for (var i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ol>");


//                                       Question No.8


// var studentNames = ["Alia", "Bazil", "salar"];
// var studentScores = [420, 375, 450];
// var totalMarks = 500;

// document.write("<h1>Student Results</h1>");

// for (var i = 0; i < studentNames.length; i++) {
//     var name = studentNames[i];
//     var score = studentScores[i];
//     var percentage = (score / totalMarks) * 100;
    
//     document.write("<p>Name: " + name + "<br>");
//     document.write("Score: " + score + " out of " + totalMarks + "<br>");
//     document.write("Percentage: " + percentage + "%</p><br>");
// }

//                                      Question No.9

// var colors = ["Red", "Green", "Blue", "Yellow"];
// alert("Initial Colors: " + colors.join(", "));

// var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// colors.unshift(colorToAddBeginning);
// alert("After adding to the beginning: " + colors.join(", "));
       
// var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// colors.push(colorToAddEnd);
// alert("After adding to the end: " + colors.join(", "));
      
// colors.unshift("Orange", "Purple");
// alert("After adding two more colors to the beginning: " + colors.join(", "));

// colors.shift();
// alert("After deleting the first color: " + colors.join(", "));

// colors.pop();
// alert("After deleting the last color: " + colors.join(", "));

// var indexToAdd = parseInt(prompt("Enter the index at which to add a new color:"));
// var colorToAdd = prompt("Enter the color to add:");
// colors.splice(indexToAdd, 0, colorToAdd);
// alert("After adding a color at index " + indexToAdd + ": " + colors.join(", "));

// var indexToDelete = parseInt(prompt("Enter the index at which to delete colors:"));
// var numberToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numberToDelete);
// alert("After deleting " + numberToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", "));


//                                      Question No.10

// var scores = [78, 92, 85, 69, 95, 70];
     
//         document.write("<h1>Student Scores</h1>");
//         document.write("<h2>Original Scores</h2>");
//         document.write("<p>" + scores.join(", ") + "</p>");

        
//         scores.sort(function(a, b) {
//             return a - b;
//         });

//         document.write("<h2>Sorted Scores</h2>");
//         document.write("<p>" + scores.join(", ") + "</p>");

//                                        Question No:11

// var cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
// var selectedCities = [];

// selectedCities.push(cities[0]); 
// selectedCities.push(cities[1]); 
// selectedCities.push(cities[2]); 
// document.write("<h1>City Arrays</h1>");
// document.write("<h2>All Cities</h2>");
// document.write("<p>" + cities.join(", ") + "</p>");
// document.write("<h2>Selected Cities</h2>");
// document.write("<p>" + selectedCities.join(", ") + "</p>");

//                                        Question No: 12

// var arr = ["This", "is", "my", "cat"];
// var String = arr.join(" ");
// document.write("<h1> Array : </h1><h3> " + arr + "</h3>")
// document.write ("<h1> String : </h1><h3> " + String + "</h3>")

//                                        Question No: 13

// var fifo = ["keyboard","mouse","printer","monitor"];
// document.write("<h1>Devices:</h1>" +fifo );

// var first =fifo.shift()
// document.write("<h1>Out:</h1>"  + first);
// document.write("<h1>Remaining Devices:</h1>"+ fifo );

// var second =fifo.shift()
// document.write("<h1>Out:</h1>" + second );
// document.write("<h1>Remaining Devices:</h1>"+ fifo );

// var third =fifo.shift()
// document.write("<h1>Out:</h1>"  + third );
// document.write("<h1>Remaining Devices:</h1>" + fifo );

// var fourth =fifo.shift()
// document.write("<h1>Out:</h1>"  + fourth);
// document.write("<h1>Remaining Devices:</h1>" + fifo);


//                                         Question No:14

// var lifo = ["keyboard","mouse","printer","monitor"];
// document.write("<h1>Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var first =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + first +"</h2>");
// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var second =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + second +"</h2>");
// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var third =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + third +"</h2>");
// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");

// var fourth =lifo.pop()
// document.write("<h1>Out:</h1>" + "<h2>" + fourth +"</h2>");
// document.write("<h1>Remaining Devices:</h1>" + "<h2>" + lifo +"</h2>");


//                                         Question No:15
 
// var phManufacturer = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

// document.write("<h1>Drop Down / Select Menu</h1><Select>"
//     +"<option>Select</option>"
//     +"<option>"+phManufacturer[0]+"</option>"
//     +"<option>"+phManufacturer[1]+"</option>"
//     +"<option>"+phManufacturer[2]+"</option>" 
//     +"<option>"+phManufacturer[3]+"</option>" 
//     +"<option>"+phManufacturer[4]+"</option>" 
//     +"<option>"+phManufacturer[5]+"</option>" 
    

// +"</select>")