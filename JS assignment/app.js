//IF ELSE



//1st



// let char = prompt("Enter a character:");

// // if the character is a number
// if (char >= "0" && char <= "9") {
//   console.log(char + " is a number");
// }
// // if the character is an uppercase letter
// else if (char >= "A" && char <= "Z") {
//   console.log(char + " is an uppercase letter");
// }
// //  if the character is a lowercase letter
// else if (char >= "a" && char <= "z") {
//   console.log(char + " is a lowercase letter");
// }
// // If the character is not a number or letter, console error
// else {
//   console.log("Error: " + char + " is not a number or a letter");
// }









//2nd 



// let num1 = +prompt("Enter the first number:");
// let num2 = +prompt("Enter the second number:");

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num1 < num2) {
//   console.log(num2 + " is larger than " + num1);
// } else {
//   console.log(num1 + " and " + num2 + " are equal");
// }








//3rd




// let input = prompt("Enter a number: ");


// let number = +input;


// if (number === 0) {
//     console.log("The number is zero");
// } else if (number > 0) {
//     console.log("The number is positive");
// } else if (number < 0) {
//     console.log("The number is negative");
// } else {
//     console.log("Please write a number");
// }







//4th

// let alphabetic = prompt("Write  any signal lowercase alphabet");
// if (alphabetic == "a" || alphabetic == "e"|| alphabetic == "i" || alphabetic == "o" || alphabetic == "u") {
//     alert("true")
// } else {
//     alert("false")
// }







//5th


// const correctPassword = "1234567";


// const userPassword = prompt("Please enter your password:");


// if (!userPassword) {
//   alert("Please enter your password.");
// } else if (userPassword === correctPassword) {
//   alert("Correct!");
// } else {
//   alert("Incorrect password.");
// }

                                          //OR

// const correctPassword = "1234567";


// const userPassword = prompt("Please enter your password:");

// if(userPassword === correctPassword){
//     alert("Correct! The password you entered matches the original password")
// }else if (!userPassword){
//     alert("Please enter your password.")
// }else{
//     alert("Incorrect passsword")
// }






//6th


// var greeting;
// var hour = prompt("Enter hour");
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting)














//ARRAY

// //1st
// let futureStudents = [];


// //2nd

// let futureStudent = new Array();

// //3rd

// let players = ["Umar", "Ali", "Bilal"];

// //4th

// let classes = [5, 8, 10, 12];

// //5th

// let booleanArray = [true, false,];


// //6th

// let mixedArray = ["Umar", 21, true, "Karachi"];





//7th

// let education = [
//     "SSC", 
//     "HSC",
//     "BCS",
//     "B.COM",
//     "MS",
//     "M.Phil",
//     "PhD"];

// document.write(education)


//8th


// let students = ["Ahmed", "Jawad", "Mahad"];


// let numbers = [420, 380, 450];


// let totalMarks = 500;


// let percentages = [];
// for (let i = 0; i < numbers.length; i++) {
//   let percentage = (numbers[i] / totalMarks) * 100;
//   percentages.push(percentage);
// }


// for (let i = 0; i < students.length; i++) {
//   document.write(students[i] + "'s numbers is " + numbers[i] + " and which is " + percentages[i] + "%. <br>");
// }









//11th



// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Hydrabad"];


// let selectedCities = [];


// selectedCities = cities.slice(1, 4);


// console.log(selectedCities);

//===================OR===================

// let cities = ["Karachi", " Hyderbad", " Quetta", " Islamabad", " Lahore"]

// let selectedCities = []

// selectedCities = cities.slice(1, 3)

// document.write("Cities:" + cities + "<br>"+ "<br>")
// document.write("Selected Cities:" + selectedCities);





//12


// var arr = ["This", "is", "my", "cat"]

// var str = "This is my cat";

// document.write(arr);

// document.write(str);

//=================OR=================

// let arr = ["This", "is", "my", "cat"];
// let str = arr.join(" ");

// document.write(arr + "<br>");
// document.write(str);






//13th

// let devices = [" keyboard", " mouse", " printer", " monitor"];

// document.write(devices+ "<br>"+ "<br>");

// document.write("Out:"+ "<br>"+ devices[0]+ "<br>");
// document.write("Out:"+ "<br>"+ devices[1]+ "<br>");
// document.write("Out:"+ "<br>"+ devices[2]+ "<br>");
// document.write("Out:"+ "<br>"+ devices[3]+ "<br>");




//14th


// let devicesRe = [" keyboard", " mouse", " printer", " monitor"];

// document.write(devicesRe+ "<br>"+ "<br>");

// document.write("Out:"+ "<br>"+ devicesRe[3]+ "<br>");
// document.write("Out:"+ "<br>"+ devicesRe[2]+ "<br>");
// document.write("Out:"+ "<br>"+ devicesRe[1]+ "<br>");
// document.write("Out:"+ "<br>"+ devicesRe[0]+ "<br>");




//15TH


// const phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];


// let selectMenu = '<select>';


// for (let i = 0; i < phoneManufacturers.length; i++) {
//   selectMenu += `<option value="${phoneManufacturers[i]}">${phoneManufacturers[i]}</option>`;
// }

// selectMenu += '</select>';


// document.write(selectMenu);









// // create an empty array to store values
// let myArray = [];

// // add values to the end of the array using the push() method
// myArray.push(10);
// myArray.push(20);
// myArray.push(30);
// myArray.push(40);

// // print the array to see its contents
// console.log(myArray);

// // remove and return the first item in the array using the shift() method
// let firstItem = myArray.shift();

// // print the first item
// console.log(firstItem);

// // print the array again to see that the first item has been removed
// console.log(myArray);






//================================ARRAY AND LOOP================================


//1st

// let multidimensionalArray =[
//     [],
//     [],
//     [],
// ]

// console.log(multidimensionalArray);






//2nd
// let nums = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];
  
//   console.log(nums);






//3rd

// for (let i = 1; i <= 10; i++) {
//     document.write(i+ "<br>");
//   }
  






//4th


// let tableNumber = (prompt("Enter the number for multiplication table:"));
// let tableLength = (prompt("Enter the length of multiplication table:"));

// for (let i = 1; i <= tableLength; i++) {
//  document.write(tableNumber + " x " + i + " = " + tableNumber * i+ "<br>");
// };







//5th



// let fruits = ["apple", "banana", "mango", "orange","strawberry"]

// for (let i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is " + fruits[i]+ "<br>")
// }








//6th


// document.write("Counting:"+ "<br>")

// for (let i = 1; i <=15; i++){
//     document.write(i +",");
// }



// document.write("<br>" + "<br>" +"Reverse Counting:"+ "<br>")

// for (let j = 10; j >=1; j--){
//     document.write(j +",");
// }



// document.write("<br>" + "<br>" + "Even:"+ "<br>")

// for (let k = 0; k <= 20; k+=2) {
//     document.write(k +",");
//   }
  



// document.write("<br>" + "<br>" +"Odd:"+ "<br>")

// for (let l = 1; l <= 19; l+=2) {
//     document.write(l +",");
//   }
  



//   document.write("<br>" + "<br>" +"Series:"+ "<br>")

//   for (let m = 1; m <= 10; m++) {
//     document.write(m * 2 + "k"+",");
//   }
  





//7th


// const A = ["cake", "bread", "milk", "cookie", "chips", "patties"];


// const userInput = prompt("Wellcome to Bakery.What do you want to order:");


// let found = false;
// for (let i = 0; i < A.length; i++) {
//   if (A[i] === userInput) {
//     found = true;
//     break;
//   }
// }


// if (found) {
//   alert(userInput + " is available in our bakery.");
// } else {
//   alert("We are sorry "+userInput + " is not availble on our bakery.");
// }






//8th

// const number = [24, 53, 78, 91, 12];
// let largest = number[0];

// for (let i = 1; i < number.length; i++) {
//   if (number[i] > largest) {
//     largest = number[i];
//   }
// }

// document.write(`The largest number in the array is ${largest}.`);





//9th

// const numbers = [24, 53, 78, 91, 12];
// let smallest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallest) {
//     smallest = numbers[i];
//   }
// }

// document.write(`The smallest number in the array is ${smallest}.`);







//10th

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//       document.write(i+",");
//     }
//   }
  