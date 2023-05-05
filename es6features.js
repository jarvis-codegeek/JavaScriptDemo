//let and const keywords introduced in ES6

//block scoped data types
let x1 = () => {
    console.log('alert')
}

x()

const y = {'key1': 'value', 'key2': 'value'} 

y['key1'] = 'value changed' //this is allowed

y = {} // this is not allowed

const a = [1, 2, 3, 4]

a[0] = 5

a = [2, 3, 4, 5]

//value type datatypes

//number
//string
//boolean


const z = 'some string'

z = 'new string'


if(false){








}else if(false){
    console.log(x)

}else{
    
}


for(var i=0; i< n; i++){

    let x = 'string example'
    console.log(x);

}

console.log(x)
//-----------------------------------------

//let and const cannot be hoisted
x = 10

console.log(x)

const x = undefined;

let
var 
const 
 x = ''

let x = 20

x = 10 


const x = [1, 2, 3, 4]

x[0] = 100

console.log(x)


//let and const these are part of ES6

//var ES5 feature









function myFunc(firstName = 'vasanth', lastName = 'HR'){
    var name = 'My name is' + ' ' + firstName +' '+ lastName; //ES5
    let name = `My name is ${firstName}` //ES6

    console.log(name)

}

myFunc()

let myFunc = (a, b) => {
    this // doesn't exist
    //arrow functions doesn't contain constructors, this keyword doesn't exists

}


this.myFunc = myFunc.bind(this)

let greeting = `Hello World,     
                Greetings to all,
                Keep Learning and Practicing!`



let person = {firstName: "Peter", age: 28};
//Syntax for descturizing
const {firstName, age}  = person;


firstName = 'Shashank' // this is not possible with const 
console.log(firstName, age)



//ES5
person.name
person.age

person['name']
person['age']

let fruits = ["Apple", "Banana"];
let [a, b] = fruits; // Array destructuring assignment
console.log(a, b);

  












