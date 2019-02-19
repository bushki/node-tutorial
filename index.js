const person = require('./person');
const Person = require('./person-class');
console.log(person);

//person from class
const person1 = new Person('John', 45);
person1.greeting();