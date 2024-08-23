// JavaScript Data Types :

/*
 * String
 */
let firstName = "Hi";
firstName = "ASIF";
console.log(typeof firstName);

// let fullName = 'My name is \'Hi ASIF\'';
let fullName = "My name is 'Hi ASIF'";
console.log(fullName);

let finalName = `My name is ${firstName}`;
console.log(finalName);

/*
 * Number
 */
let age = 23;
let age2 = 25;
let calculation = age + age2 + firstName + age + age2;

console.log(finalName);
console.log(calculation);
console.log(typeof calculation);

/*
 * Bigint
 */
// let numberBig = 999999999999999999n;
// let numberBig2 = 999999999999999999n;

// console.log(numberBig * numberBig2);
// console.log(typeof numberBig);

let numberBig = 9n;
let numberBig2 = BigInt(5);
console.log(numberBig * numberBig2);

/*
 * Boolean
 */
let ifAdult = true;
console.log(ifAdult);
console.log(typeof ifAdult);

/*
 * Undefined
 */
let someInfo;
console.log(someInfo);
console.log(typeof someInfo);

/*
 * Null
 */
let anotherInfo = null;
console.log(anotherInfo);
console.log(typeof anotherInfo);

/*
 * Array
 */
let fruits = ["Apple", "Lemon", "Pear", "Orange", 25, true.undefined, null];
fruits[4] = "Mango";
console.log(fruits);
console.log(fruits[4]);
console.log(typeof fruits);

/*
 * Object
 */
let student = {
  fullName: "Hi ASIF",
  age: 23,
  dateOfBirth: 2001,
};
console.log(student);
console.log(typeof student);
