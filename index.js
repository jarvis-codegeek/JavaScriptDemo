

//Objects and Arrays
//Different waus to create an object
//1. Object literal type

// var obj = {firstName: 'shashank', lastName: 'joshi', age: '32'}

// console.log(obj)


// //2. creating an object using new keyword

// var obj = new Object();

// obj.firstName = "shashank"
// obj.lastName = "joshi"
// obj.age = 32

// //3. creating an object using function constructor

// function testFunction(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age

// }

// var obj = new testFunction('shashank','joshi', 32)
// console.log(obj)

// //4. Creating an object using Object.create()

// var obj = {
//     firstName: 'Vasanth',
//     lastName: 'joshi'
// }

// var newObj = Object.create(obj);
// newObj.age = 32;


//shallow copy
var obj2 = obj;
obj2.firstName = "Vasanth"
obj2.age = 32

//deep copy 

var obj = {
    firstName: 'shashank',
    lastName: 'joshi'
}

console.log("first object", obj)


console.log("strigified", JSON.stringify(obj))

console.log("parsed", JSON.parse(JSON.stringify(obj)))
//var obj2 = JSON.parse(JSON.stringify(obj)) //deep copied object

//using spread operator from ES6 ...

var obj2 = {...obj}

obj2.firstName = "sushant"


//ES6 or React JS Project
// using lodash library, contains utility functions

var obj2 = deepCopy(obj)




