// // what is an array? 

// //various ways to create an array in javascript


// var x = 'string' //

// var x = ['volvo', 'maruti', 56, true, {}, []] // literal type

// console.log('x', x)

// var y = new Array('elem1', 'elem2', 'elem3') // using array constructor

// var y = new Array(7) 

// //[,,,,,,,]

// console.log('y' , y) // ['elem1', 'elem2', 'elem3']

// var z = '1234'

// z = z.split("")

// console.log('z', z) // ['This', 'is', 'a', 'javascript']

// // var z = "1234"

// // z = z.split() //["1", "2", "3", "4"]

// var a = Array.of('elem1', 'elem2', 'elem3')

// var a = Array.of(7)

// //[7]

var arr = ['volvo', 'maruti', 'tata', 'benz', 'bmw']

arr.push('honda')

console.log(arr)

Array.isArray(arr)

//true


typeof(arr)

//'object'

var newArr = []

newArr[0] = "maruti"

var newArr = [...arr]

//lodash utilities

























