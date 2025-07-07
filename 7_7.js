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