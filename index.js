
/**** Values and Variables in JavaScript ****/
var myName = 'alina maharjan';
var myAge = 26;
console.log(myAge);

//Naming Practice
/*var _myName = "alina";
var _1my__Name = "maharjan";
var $myName = "Here is your name";
var myNaem% = "Testing";

console.log(myNaem%);*/

/**** Data Types in JavaScript ****/


// var myName = "alina maharjan";
// console.log(myName);

// var myAge = 28;
// console.log(myAge);

// var test = false;
// console.log(test);

// // typeof operator 
// console.log(typeof(test));


// DataTypes Practice

// console.log( 10 + "20");
// 9 - "5"
// console.log( 9 - "5"); //bug
// "Java" + "Script"
// console.log( "Java "+ "Script");
// " " + " "
// console.log( " " + 0);
// " " + 0
// "java" - "script"
// true + true
// true + false
// false + true
// false - true


// console.log("java" - "script");



/**** Arithmetic operators in JavaScript ****/



// console.log(5+20);


// Assignment operators
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

// var x = 5; 
// var y = 5;

// console.log("is both the x and y are equal or not" + x == y );
// console.log('Is both the x and y are equal : ${x == y}');




// Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

// console.log(3+3);
// console.log(10-5);
// console.log(20/5);
// console.log(5*6);

// console.log("Remainder Operator " + 27%4);



// Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

// var num = 15;
// var newNum = num-- + 5;
// console.log(num);
// console.log(newNum);


// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.

// var num = 15;
// var newNum = --num + 5; 
// console.log(num);
// console.log(newNum);


// Prefix increment operator means the variable is incremented first and then 
// the expression is evaluated using the new value of the variable.


// Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

// var a = 30;
// var b = 10;

// Equal (==)
// console.log(a == b);

// Not equal (!=)
// console.log(a != b);

// // Greater than (>)
// console.log(a > b);

// // Greater than or equal (>=)
// console.log(a >= b);

// // Less than (<)
// console.log(a < b);

// // Less than or equal (<=)
// console.log(a <= b);



// Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// var a = 30;
// var b = -20;

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.


// console.log(a > b && b > -50 && b < 0);


// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

// console.log((a < b) || (b > 0) || (b > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

// console.log(!((a>0) || (b<0)));
// console.log(!true);


// String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


// console.log("Hello World");

// console.log("hello " +  "world");

// var myName = "alina";

// console.log(myName + " maharjan");


/**** Control Statement - 
 * 
 * If...Else */
// The if statement executes a statement if a specified condition is truthy. 
// If the condition is falsy, another statement can be executed.


// if raining = raincoat
// else no raincoat


// var tomr = 'sunny';

// if(tomr == 'rain'){
//   console.log('take a raincoat');
// }else{
//   console.log('No need to take a raincoat');
// }

//practice

// var year = 2020;
// debugger;
// if(year % 4 === 0){
//   if(year % 100 === 0){
//     if(year % 400 === 0){
//       console.log("The year " + year + " is a leap year");
//     }else{
//       console.log("The year " + year + " is not a leap year");
//     }
//   }else{
//     console.log("The year " + year + " is a leap year");
//   }
// }else{
//   console.log("The year " + year + " is not a leap year");
// }


// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands
// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");




// Switch Statement
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.

// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle': 
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }   



// break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// Continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.





// While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 

// var num=20;
// // block scope 
// while(num <= 10){
//   console.log(num); //infinte loop
//   num++;
// }

// Do-While Loop Statement

// var num = 20;
// do{
//   debugger;
//   console.log(num); //infinte loop
//   num++;
// }while(num <= 10);

// For Loop 

// for(var num = 0; num <= 10; num++){
//     debugger;
//     console.log(num);
// }



/**** Functions in JavaScript ****/

// var a = 10;
// var b = 20;
// var sum = a+b;
// console.log(sum);


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
// // 

// Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).


// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }

// sum();



// Function Parameter vs Function Arguments 

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)

// Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);



// Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"


// function sum(a,b){
//   return total = a+b;
// }

// var funExp = sum(5,25);

// console.log('the sum of two no is ' + funExp );


// Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var funExp = function(a,b){
//   return total = a+b;
// }

// var sum = funExp(15,15);
// var sum1 = funExp(20,15);

// console.log(sum > sum1 );

// var => Function scope 
// let and const => Block Scope 



// Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

  //  ➡ Array Destructuring 

  // const myBioData = ['alina', 'maharjan', 26];

  // let myFName = myBioData[0];
  // let myLName = myBioData[1];
  // let myAge = myBioData[2];
  
// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

  // we can add values too 
  
  // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
  // console.log(myDegree);



  // ➡ Object destructuring 
  // const myBioData = {
  //   myFname : 'alina',
  //   myLname : 'maharjan',
  //   myAge : 26
  // }

  // let age = myBioData.age;
  // let myFname = myBioData.myFname;

  // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
  // console.log(myLname);


 
// Fat Arrow Function 

// Normal Way of writing Function  

// console.log(sum()); 

// function sum() {
//   let a = 5; b = 6;
//   let sum = a+b;
//  return 'the sum of the two number is ${sum}';
// }

//  How to convert in into Fat Arrow Function 

// const sum = () => 'the sum of the two number is ${(a=5)+(b=6)}';

// console.log(sum()); 



// Spread Operator

// const colors = ['red', 'green', 'blue', 'white', 'pink'];

// const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
// // // 2nd time add one more color on top and tell we need to write it again 
// // // on myColor array too 

// const MyFavColors = [ ...colors, 'yellow', 'black'];

// console.log(MyFavColors);


// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);

// 2: **
// console.log(2**3); 



// ES8 Features 

// String padding
// Object.values()
// Object.entries()

// const message = "my name is vinod";
// console.log(message);
// console.log(message.padStart(5));
// console.log(message.padEnd(10));


// const person = { name: 'Fred', age: 87 };

// // // console.log( Object.values(person) );
// const arrObj =  Object.entries(person);
// console.log(Object.fromEntries(arrObj));



// ES2018

// const person = { name: 'Fred', age: 87, degree : "mcs" };
// const sPerson = { ...person };

// console.log(person);
// console.log(sPerson);


// ES2019
// Array.prototype.{flat,flatMap}
// Object.fromEntries()

// ES2020
// #1: BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
// // console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// const foo = null ?? 'default string';
// console.log(foo);

// ES2014

// "use strict";

// x = 3.14; 
// console.log(x);



/**** Arrays in JavaScript  ****/

// When we use var, we can stored only one value at a time. 
// var friend1 = 'ramesh';
// var friend2 = 'arjun';
// var friend3 = 'vishal';

// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// When we feel like storing multiple values in one variable then 
// instead of var, we will use an Array.

// In JavaScript, we have an Array class, and 
// arrays are the prototype of this class. 


// var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

// Array Subsection 1 
//Traversal in array 
// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 


// var myFriends = ['vinod','ramesh','arjun','vishal'];

// console.log(myFriends[myFriends.length - 1]);

// if we want to check the length of elements of an array 

// console.log(myFriends.length);

// we use for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }

// After ES6 we have for..in and for..of loop too 

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// for(let elements in myFriends){
//   console.log(elements);
// }

// for(let elements of myFriends){
//   console.log(elements);
// }

// Array.prototype.forEach()
// Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];

// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// myFriends.forEach((element, index, array) => {
//   console.log(element + " index : " +
//     index + " " + array);
// });




// Searching and Filter in an Array 

// Array.prototype.indexOf() 

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));


// Array.prototype.lastIndexOf() 
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("Thapa",3));



// Array.prototype.includes() 
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));



// Array.prototype.find() 

// arr.find(callback(element[, index[, array]])[, thisArg])

// Returns the found element in the array, if some element in the 
// array satisfies the testing function, or undefined if not found.
// Only problem is that it return only one element

// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// console.log(  prices.find((currVal) => currVal > 1400 )  );
