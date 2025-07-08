// object in js 
// object is a collection of key-value pairs
const person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
    };


 // map in js
    const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
    return num * 2;
});


// console.log(doubled); // Output: [2, 4, 6, 8, 10]

// prototype in js
// prototype is a mechanism to add properties and methods to an object

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};


const john = new Person("John", 30);
john.greet(); // Output


// map replica

const arr = [1, 2, 3, 4, 5];

Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

const doubleValue = arr.myMap(function(num) {
    return num * 2;
});

console.log(doubleValue); // Output: [2, 4, 6, 8, 10]



// filter replica
const arr2 = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const evenNumbers = arr2.myFilter(function(num) {
    return num % 2 === 0;
});


console.log(evenNumbers); // Output: [2, 4]

//reduce replica

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

const sum = arr2.myReduce(function(acc, num) {
    return acc + num;
}, 0);


