//Loopings


//Syntax
// for(value initialization; condition; increment/decrement){
//     //code block will be executed 
// }


//Ex:
var y = ['volvo', 'maruti', 'tata', 'benz', 'bmw']

for(var x = 0; x < y.length; x++){
    console.log(x)
}

//x++ = count will be increased to 1

//x-- = count will be decremented by 1

// x++ = x + 1

// x-- = x - 1

var x = ['', 'maruti', 'tata', 'benz', 'bmw']

x.forEach(function(value, index){
    if(value === 'volvo'){
        x[0] = "bmw"
    }
})

x.forEach((element, index) => {
    if(element === "volvo"){
            x[0] = ""
    }

    if(element === "bmw"){
        return;
    }
})

x.map() // returns a new array

x.forEach() // this doesn't return a new array

var x = ['', 'maruti', 'tata', 'benz', 'bmw']

var y = x.map(function(element, index){
    if(element === ""){
        x[0] === "volvo"
    }
})


//Explore these methods
x.filter(() => {}, )
x.some()
x.find()
x.findIndex()