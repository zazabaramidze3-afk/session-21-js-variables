/*
  JavaScript Basics Practice
  ==========================

  How to use this file:
  1. Read each short explanation.
  2. Run this file with:
       node script.js
  3. Complete the TASK sections directly in this file.
  4. Use console.log() often to check your answers.

  Topics covered:
  - variable declarations: var, let, const
  - naming variables
  - primitive types
  - reference types
  - objects and arrays
  - scope
  - block scope and function scope
  - hoisting
  - type conversion
  - comparison
  - practice tasks
*/

console.log("JavaScript Basics Practice");
console.log("==========================");

// ---------------------------------------------------------------------------
// 1. Variable Declarations
// ---------------------------------------------------------------------------

/*
  JavaScript has three main ways to declare variables:

  var:
    Older style.
    Function-scoped.
    Can be re-declared and re-assigned.
    Avoid it in modern JavaScript unless you are reading older code.

  let:
    Modern style.
    Block-scoped.
    Can be re-assigned.
    Use it when the value will change.

  const:
    Modern style.
    Block-scoped.
    Cannot be re-assigned.
    Use it by default when the value should not be replaced.
*/

var oldName = "old style";
let currentName = "modern style";
const language = "JavaScript";

console.log("var example:", oldName);
console.log("let example:", currentName);
console.log("const example:", language);

currentName = "updated modern style";
console.log("updated let:", currentName);

/*
  TASK 1:
  Create three variables:
  - firstName with your first name
  - age with your age
  - isStudent with true or false

  Use const when the value should not change.
  Use let if you plan to change the value later.

  Then print all three values.
*/

// Write your code here:
const firstname = "Zaza";
let age = 33;
let isStudent = true;
console.log(`your name: ${firstname}, you are  ${age} years old`)
/*
  TASK 2:
  Create a variable called score with value 10.
  Re-assign it to 20.
  Print the result.
*/

// Write your code here:
let score = 10;
score = 20;
console.log(score);
// ---------------------------------------------------------------------------
// 2. Variable Naming
// ---------------------------------------------------------------------------

/*
  Good variable names describe the value clearly.

  Good:
    userName
    totalPrice
    isLoggedIn
    maxAttempts

  Bad:
    x
    data
    thing
    aaa

  JavaScript usually uses camelCase for variable names.
*/

const userName = "Nino";
const totalPrice = 49.99;
const isLoggedIn = true;

console.log("naming examples:", userName, totalPrice, isLoggedIn);

/*
  TASK 3:
  Create variables for:
  - a product name
  - a product price
  - whether the product is available

  Use clear camelCase names.
*/

// Write your code here:
let productName = "Apple";
let productPrice = 7;
console.log(`Product ${productName} is available, Price cost of ${productPrice}`);
// ---------------------------------------------------------------------------
// 3. Primitive Types
// ---------------------------------------------------------------------------

/*
  Primitive values are simple values.

  Main primitive types:
  - string: text
  - number: integers and decimals
  - boolean: true or false
  - undefined: declared but no value assigned
  - null: intentionally empty
  - bigint: very large integers
  - symbol: unique identifier

  typeof tells you the type of a value.
*/

const city = "Tbilisi";
const temperature = 24;
const hasInternet = true;
let selectedUser;
const emptyValue = null;

console.log("typeof city:", typeof city);
console.log("typeof temperature:", typeof temperature);
console.log("typeof hasInternet:", typeof hasInternet);
console.log("typeof selectedUser:", typeof selectedUser);
console.log("typeof emptyValue:", typeof emptyValue); // historical JS behavior: "object"

/*
  TASK 4:
  Create one variable for each type:
  - string
  - number
  - boolean
  - undefined
  - null

  Print each value and its type.
*/

// Write your code here:
const city2 = "Batumi";
let temperature2 = 33;
let hasInternet2 = true;
let selectedUsr2;
let emptyValue2 = null;

console.log("typeof city:", typeof city2);
console.log("typeof temperature:", typeof temperature2);
console.log("hasInternet:", typeof hasInternet2);
console.log("selectedUsr:", typeof selectedUsr2);
console.log("emptyValue2", typeof emptyValue2);

/*
  TASK 5:
  Predict the result before running the code.
  Then uncomment the lines and check.
*/

console.log(typeof "100");
console.log(typeof 100);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

// ---------------------------------------------------------------------------
// 4. Reference Types
// ---------------------------------------------------------------------------

/*
  Reference types store a reference to a value in memory.

  Common reference types:
  - object
  - array
  - function

  When you copy a primitive, JavaScript copies the value.
  When you copy an object or array, JavaScript copies the reference.
*/

let primitiveA = 10;
let primitiveB = primitiveA;
primitiveB = 99;

console.log("primitiveA:", primitiveA); // 10
console.log("primitiveB:", primitiveB); // 99

const userA = {
  name: "Ana",
  age: 25,
};

const userB = userA;
userB.age = 30;

console.log("userA age:", userA.age); // 30
console.log("userB age:", userB.age); // 30

/*
  TASK 6:
  Create an object called car with:
  - brand
  - model
  - year

  Create another variable called sameCar and assign car to it.
  Change sameCar.year.
  Print both car.year and sameCar.year.

  Question:
  Why did both values change?
*/

// Write your code here:
let car = {
  brand: "audi",
  model: "A6",
  year: 2023
}

let sameCar = car;
sameCar.year = 2026;
console.log(car.year);
console.log(sameCar.year);
/*
  TASK 7:
  Create an array called colors with three colors.
  Create another variable called favoriteColors and assign colors to it.
  Push one more color into favoriteColors.
  Print both arrays.

  Question:
  Why do both arrays contain the new color?
*/

// Write your code here:
let colors = ["#0000", "#cccc", "#ffff"];
let favoriteColors = colors;
favoriteColors = "#010234";
console.log(colors);
console.log(favoriteColors);
console.log(typeof(colors));
console.log(typeof(favoriteColors));
// ---------------------------------------------------------------------------
// 5. Objects
// ---------------------------------------------------------------------------

/*
  Objects store related data as key-value pairs.

  Example:
*/

const person = {
  firstName: "Giorgi",
  lastName: "Beridze",
  age: 28,
  isDeveloper: true,
};

console.log("person first name:", person.firstName);
console.log("person age:", person["age"]);

person.age = 29;
person.country = "Georgia";

console.log("updated person:", person);

/*
  TASK 8:
  Create an object called book with:
  - title
  - author
  - pages
  - isRead

  Then:
  - print the title
  - change isRead to true
  - add a new property called rating
  - print the full object
*/

// Write your code here:
const book = {
  "title": "power of now",
  "author": "ekhart tole",
  "pages": 377,
  "isRead": false,
}
console.log("book title:", book.title);
book.isRead = true;
book.rating = 7;
console.log("This book:", book);

/*
  TASK 9:
  Create an object called profile.
  It should include:
  - name
  - email
  - address

  address should be another object with:
  - city
  - street
  - buildingNumber

  Print only the city.
*/

// Write your code here:
const address = {
  "city":  "batumi",
  "street": "kostava street",
  "buildingNumber": 28
}
const profile = {
  "name": "ZET",
  "Email": "alphamindset@gmail.com",
  "address": address.city
  // "address": ["batumi", "kostava street", 28]
}
console.log(profile);
// ---------------------------------------------------------------------------
// 6. Arrays
// ---------------------------------------------------------------------------

/*
  Arrays store ordered lists.
  Array indexes start at 0.
*/

const fruits = ["apple", "banana", "orange"];

console.log("first fruit:", fruits[0]);
console.log("number of fruits:", fruits.length);

fruits.push("kiwi");
console.log("after push:", fruits);

/*
  TASK 10:
  Create an array called numbers with five numbers.
  Then:
  - print the first number
  - print the last number
  - add a new number
  - print the array length
*/

// Write your code here:
const numbers = [11,22,33,44,55];
console.log(numbers[0]);
console.log(numbers[4]);
numbers.push(777);
console.log(numbers.length);


/*
  TASK 11:
  Create an array of three user objects.
  Each user should have:
  - name
  - age

  Print the name of the second user.
*/

// Write your code here:
// const users = [{"name": "ALPHA", "age": 33},{"name": "ALPHA2", "age": 30},{"name": "ALPHA3", "age": 23}];
// console.log(users);
// მასივი მასივში: [სახელი, ასაკი]
const users = [
  ["ALPHA", 33],
  ["ALPHA2", 30],
  ["ALPHA", 23]
];

// მეორე მომხმარებლის სახელის ბეჭდვა:
console.log(users[1][0]); 

// ---------------------------------------------------------------------------
// 7. Scope
// ---------------------------------------------------------------------------

/*
  Scope controls where a variable can be used.

  Global scope:
    A variable declared outside blocks and functions.

  Function scope:
    A variable declared inside a function.

  Block scope:
    A variable declared inside { } with let or const.
*/

const globalMessage = "I am global";

function showScopeExample() {
  const functionMessage = "I am inside a function";
  console.log(globalMessage);
  console.log(functionMessage);
}

showScopeExample();


if (true) {
  const blockMessage = "I am inside a block";
  console.log(blockMessage);
}

// This would cause an error because blockMessage exists only inside the if block.
// console.log(blockMessage);

/*
  TASK 12:
  Create a function called greetUser.
  Inside the function:
  - create a variable called message
  - print the message

  Then call the function.

  After that, try to print message outside the function.
  What happens?
*/
 "ReferenceError: message is not defined"
// Write your code here:
function greetUser() {
  const message = "Hello, welcome to JavaScript!";
  console.log(message);
}
greetUser();
// console.log(message); // This will cause an error because message is not defined outside the function
/*
  TASK 13:
  Create an if block.
  Inside it, declare:
  - one variable with let
  - one variable with const

  Try to print both inside the block.
  Then try to print both outside the block.
  What happens?
*/
"This will cause an error because blockLet is not defined outside the block"
// Write your code here:
if(true){
  let blockLet = "I am a block-scoped variable declared with let";
  const blockConst = "I am a block-scoped variable declared with const";
  console.log(blockLet);
  console.log(blockConst);
}
// console.log(blockLet); // This will cause an error because blockLet is not defined outside the block
// console.log(blockConst); // This will cause an error because blockConst is not defined outside the block
// ---------------------------------------------------------------------------
// 8. var, let, and const Scope Difference
// ---------------------------------------------------------------------------

/*
  var is function-scoped, not block-scoped.
  let and const are block-scoped.
*/

function varScopeExample() {
  if (true) {
    var varValue = "var escapes the block";
    let letValue = "let stays in the block";
    const constValue = "const stays in the block";

    console.log(varValue);
    console.log(letValue);
    console.log(constValue);
  }

  console.log(varValue);
  // console.log(letValue);   // Error
  // console.log(constValue); // Error
}

varScopeExample();

/*
  TASK 14:
  Create a function called testVarLetConst.
  Inside the function, create an if block.
  Inside the if block, declare:
  - a var variable
  - a let variable
  - a const variable

  Print all three inside the block.
  Print them outside the block but still inside the function.
  Which ones work?
*/
//Inside the if block, all three variables are accessible and will print their values.
// Write your code here:
function testVarLetConst() {
  if (true) {
    var varValue = "var escapes the block";
    let letValue = "let stays in the block";
    const constValue = "const stays in the block";

    console.log(varValue);
    console.log(letValue);
    console.log(constValue);
  }
  
  // console.log(varValue);   // This will cause an error
  // console.log(letValue);   // This will cause an error
  // console.log(constValue); // This will cause an error
}
// ---------------------------------------------------------------------------
// 9. Hoisting
// ---------------------------------------------------------------------------

/*
  Hoisting means JavaScript prepares declarations before running code.
  var is hoisted and initialized as undefined.
  let and const are hoisted too, but they cannot be used before declaration.
*/
console.log("hoisted var before declaration:", hoistedVar);
var hoistedVar = "I was declared later";

// These would cause errors:
// console.log(hoistedLet);
// let hoistedLet = "cannot use before declaration";

// console.log(hoistedConst);
// const hoistedConst = "cannot use before declaration";

/*
  TASK 15:
  Predict what each example will do.
  Uncomment one example at a time.
  Run the file after each change.
*/

console.log(myVar);
var myVar = 5;

// console.log(myLet);
// let myLet = 5;

// console.log(myConst);
// const myConst = 5;

// ---------------------------------------------------------------------------
// 10. Type Conversion
// ---------------------------------------------------------------------------

/*
  JavaScript can convert values from one type to another.

  Explicit conversion:
    You convert it yourself with String(), Number(), Boolean(), etc.

  Implicit conversion:
    JavaScript converts it automatically in some expressions.
*/

const numberAsText = "42";
const convertedNumber = Number(numberAsText);

console.log("converted number:", convertedNumber);
console.log("converted number type:", typeof convertedNumber);

console.log("string plus number:", "5" + 2); // "52"
console.log("string minus number:", "5" - 2); // 3

/*
  TASK 16:
  Convert:
  - "123" to a number
  - 456 to a string
  - 0 to a boolean
  - 1 to a boolean

  Print each value and its type.
*/

// Write your code here:
console.log(Number("123"));
console.log(String(456));
console.log(Boolean(0));
console.log(Boolean(1));
/*
  TASK 17:
  Predict the output before running.
  Then uncomment and check.
*/

console.log("10" + 5);
console.log("10" - 5);
console.log(Number("hello"));
console.log(Boolean(""));
console.log(Boolean("hello"));

// ---------------------------------------------------------------------------
// 11. Comparison
// ---------------------------------------------------------------------------

/*
  Use === for strict equality.
  Use !== for strict inequality.

  Avoid == and != when learning modern JavaScript because they perform type
  conversion before comparing.
*/

console.log("5 === 5:", 5 === 5);
console.log('"5" === 5:', "5" === 5);
console.log('"5" == 5:', "5" == 5);

/*
  TASK 18:
  Predict each result.
  Then uncomment and run.
*/

console.log(10 === 10);
console.log("10" === 10);
console.log(true === 1);
console.log(null === undefined);
console.log(null == undefined);

// ---------------------------------------------------------------------------
// 12. Object Copying
// ---------------------------------------------------------------------------

/*
  If you want to copy an object without sharing the same reference, create a
  new object.

  For simple objects, you can use spread syntax:
*/

const originalProduct = {
  name: "Keyboard",
  price: 120,
};

const copiedProduct = {
  ...originalProduct,
};

copiedProduct.price = 100;

console.log("original product:", originalProduct);
console.log("copied product:", copiedProduct);

/*
  Important:
  Spread syntax creates a shallow copy.
  Nested objects are still shared unless you copy them too.
*/

const originalOrder = {
  id: 1,
  customer: {
    name: "Mariam",
  },
};

const copiedOrder = {
  ...originalOrder,
};

copiedOrder.customer.name = "Dato";

console.log("original order customer:", originalOrder.customer.name);
console.log("copied order customer:", copiedOrder.customer.name);

// const copiedOrder = structuredClone(originalOrder); 
// copiedOrder.customer.name = "Dato";

// console.log("original order customer:", originalOrder.customer.name);
// console.log("copied order customer:", copiedOrder.customer.name);

/*
  TASK 19:
  Create an object called laptop with:
  - brand
  - memory
  - owner

  Create a shallow copy called copiedLaptop.
  Change copiedLaptop.owner.
  Print both objects.
*/

// Write your code here:
let laptop = {
  "brand": "apple",
  "memory": 128,
  "owner": "ZET"
}
let copiedLaptop = {
  ...laptop,
}
copiedLaptop.owner = "ZET2";
console.log(laptop);
console.log(copiedLaptop);
//
//deep copy
let laptop2 = {
  "brand": "apple",
  "memory": 128,
  "owner": "ZET"
}
let copiedLaptop2 = structuredClone(laptop2);
copiedLaptop2.owner = "ZET2";
console.log(laptop2);
console.log(copiedLaptop2);

/*
  TASK 20:
  Create an object called company with:
  - name
  - address

  address should be an object with:
  - city
  - street

  Create a shallow copy of company.
  Change the copied company's address.city.
  Print both objects.

  Question:
  Why did the original company's city change too?
*/

// Write your code here:
let company = {
  "name": "BuildingEnergy",
  "address": {"city": "batumi", "street": "Shaumiani"}
}

console.log(company.name);
console.log(company.address["city"]);
let copycompany = {
  ...company,
}

console.log("------------------------------------------");
copycompany.name = "NetFlix";
copycompany.address["city"] = "NewYork";
console.log(company.name);
console.log(company.address["city"]);
console.log("------------------------------------------");
console.log(copycompany.name);
console.log(copycompany.address["city"]);
// ---------------------------------------------------------------------------
// 13. Final Practice
// ---------------------------------------------------------------------------

/*
  FINAL TASK 1:
  Create a userProfile object with:
  - id
  - firstName
  - lastName
  - age
  - email
  - isActive
  - skills
  - address

  skills should be an array of strings.
  address should be an object with city and country.

  Then:
  - print the full name
  - print the first skill
  - add one more skill
  - change the city
  - print the updated object
*/

// Write your code here:
console.log("------------------------------------------");
let userProfile = {
  "id": 1,
  "firstName": "STIV",
  "lastName": "JOBS",
  "age": 77,
  "email": "JOBS@gmail.com",
  "isActive": true,
  "skills": ["Data science","AI skills","Machine learning"],
  "address": {"country":"Newyork","city":"Sthenford"}
}
console.log(`${userProfile.firstName} - ${userProfile.lastName}`);
console.log(userProfile.skills[0]);
userProfile.skills.push("Web Development")
// console.log(userProfile.skills)
console.log(userProfile.address["city"])
userProfile.address.city = "Masachusetse"
console.log(userProfile)

/*
  FINAL TASK 2:
  Create two objects:
  - studentOne
  - studentTwo

  Each student should have:
  - name
  - grades

  grades should be an array of numbers.

  Then:
  - calculate the average grade for each student
  - print which student has the higher average

  Hint:
  You can calculate an average like this:
    const average = (grade1 + grade2 + grade3) / 3;
*/

// Write your code here:
// 1.
const studentOne = {
  name: "Student One",
  grades: [5, 4, 5, 3, 5]
};

const studentTwo = {
  name: "Student Two",
  grades: [4, 5, 5, 5, 5]
};

// 2. Функция для расчета среднего балла (работает с любым количеством оценок)
function calculateAverage(grades) {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  return sum / grades.length;
}

const avgOne = calculateAverage(studentOne.grades);
const avgTwo = calculateAverage(studentTwo.grades);

// Выводим средние баллы в консоль
console.log(`${studentOne.name} имеет средний балл: ${avgOne.toFixed(2)}`);
console.log(`${studentTwo.name} имеет средний балл: ${avgTwo.toFixed(2)}`);

// 3.
if (avgOne > avgTwo) {
  console.log(`${studentOne.name} has the higher average!`);
} else if (avgTwo > avgOne) {
  console.log(`${studentTwo.name} has the higher average.`);
} else {
  console.log("Student one has the same average.");
}

/*
  FINAL TASK 3:
  Create a function called describeValue.
  It should receive one parameter called value.
  Inside the function:
  - print the value
  - print typeof value
  - if the value is null, print "This is null"
  - if the value is an array, print "This is an array"
  - if the value is an object, print "This is an object"

  Test it with:
  - a string
  - a number
  - a boolean
  - null
  - an array
  - an object

  Hint:
  Array.isArray(value) checks if something is an array.
*/

// Write your code here:
function describeValue(value) {
  // 1. Выводим само значение и его базовый тип
  console.log("Значение:", value);
  console.log("Тип (typeof):", typeof value);

  // 2. Проверяем на специфические типы данных
  if (value === null) {
    console.log("This is null");
  } else if (Array.isArray(value)) {
    console.log("This is an array");
  } else if (typeof value === "object") {
    console.log("This is an object");
  }

  console.log("-------------------"); // Разделитель для удобства чтения
}

// Тестирование функции с разными типами данных:
describeValue("Hello");       // Строка
describeValue(42);            // Число
describeValue(true);          // Булевое значение
describeValue(null);          // Null
describeValue([1, 2, 3]);     // Массив
describeValue({age: 25});     // Объект

console.log("End of practice file");
