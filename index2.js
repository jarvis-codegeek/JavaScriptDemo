// Prototypal inheritance

var obj = {
    firstName: 'shashank',
    fn: function(){ alert('test function')}
}


var newObj = {
    age: 32,
    __proto__: obj
}

newObj.fn = function(){ alert('test function kjgjhghgjhgjhg')}


console.log(newObj.fn())
