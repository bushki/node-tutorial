// const person = require('./person');
// const Person = require('./person-class');
// console.log(person);

// //person from class
// const person1 = new Person('John', 45);
// person1.greeting();

const Logger = require('./logger');

const logger = new Logger();
logger.on('message', (data) => 
console.log('Called Listener:',data)
);

logger.log('Hello logger!');
logger.log('Hi');
logger.log('Bye');