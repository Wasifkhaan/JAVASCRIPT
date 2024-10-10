//                              ASSIGNMENNT NO: 10

//                                                  Question no 1 

//  var firstName = prompt("Enter your First Name!")
//  var SecondName = prompt("Enter your Second Name!")
//  var fullName = `${firstName} ${SecondName}`;
//  alert("Hello " + fullName) 


//                                                 Question no 2 

// var inputModel = prompt("Enter your Favourite Phone Name for find it's Lenght!")
// var result = inputModel.length;
// document.write("<h1>" + "Lenght :" +result+ "</h1>")


//                                                 Question no 3 

// var Letter = "Pakistani";
// var result = Letter.indexOf("n");
// document.write("<h1>" + "Letter :" + "Pakistani" +"</h1>")
// document.write("<h1>" + "Index :" +result+ "</h1>")

//                                                  Question no 4 

// var letter = "Hello World!";
// var result = letter.lastIndexOf("l");
// document.write("<h1>" + "Index of last l :" +result+ "</h1>")

//                                                   Question no 5 

// var Letter = "Pakistani";
// var result = Letter.charAt(3);
// document.write("<h1>" + "Letter at index 3 is : " +result+ "</h1>")

//                                                    Question no 6 

//  var firstName = prompt("Enter your First Name!")
//  var SecondName = prompt("Enter your Second Name!")
// var fullName = firstName.concat(" ", SecondName);
//  alert("Hello " + fullName) ;


//                                                      Question no 7 

// var city = "hyderabad";
// var replace = city.replace("hyder" , "Islam");
// document.write(replace);

//                                                       Question no 8 

// var message ="Ali and Sami are best friends. They play cricket and football together";
// var replace = message.replaceAll("and","&");
// document.write(replace);

//                                                        Question no 9 
 
// var value = "3457";
// document.write("value = 3457 " + "<br>" )
// document.write("Type : "+ typeof(value) + "<br>" )
// var value2 = +"3457";
// document.write("value = 3457 " + "<br>" )
// document.write("Type : "+ typeof(value2))

//                                                       Question no 10 

// var user = prompt("enter a word of small letter to convert in capital letter")
// var result =user.toUpperCase("");
// document.write(result)

//                                                         Question no 11 

// var user = prompt("enter a word of small letter to convert in Tittle letter")
// document.write("UserInput : " + user )
// var result =user.toUpperCase("");
// document.write("<br>" +"TittleCase : "+ result)

//                                                           Question no 12 

// var num = 35.67;
// document.write("Number = "+ num)
// var replace = num.toString().replace(".","");
// document.write("<br>" + "after convert to string : "+replace)


//                                                             Question no 13 

// let username = prompt("Enter your username:");


// let invalidChars = [64, 46, 44, 33]; 

// let isValid = true;

// for (let i = 0; i < username.length; i++) {
//     if (invalidChars.includes(username.charCodeAt(i))) {
//         isValid = false;
//         break;
//     }
// }

// if (!isValid) {
//     alert("Invalid username. Please avoid using any of these characters: @ . , !");
// } else {
//     alert("Username is valid! Your username is: " + username);
// }

//                                                              Question no 14 
// var user = prompt("Enter a item which you want!")
// var arr = ["cake","biscuits","bread","pastry"]
// let found = false;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase()=== arr .toUpperCase()){
//         found = true;
//         break;
//     }
// }
// if(found){
//     alert("this item is avialable at our bakery!")
// }
// else{
//     alert("sorry this item is'nt avialable")
// }
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// // Take user input for the item to search
// let userInput = prompt("Enter the item you want to search:");

// let found = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i].toLowerCase() === userInput.toLowerCase()) {
//         found = true;
//         break;
//     }
// }
// if (found) {
//     alert(userInput + " is available in the list.");
// } else {
//     alert(userInput + " is not available in the list.");
// }