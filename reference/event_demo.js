const EventEmitter = require('events');

//Create class
class MyEmitter extends EventEmitter {}

//Init object 
const myEmtitter = new MyEmitter();

//Event listener 
myEmtitter.on('someEvent', () => console.log('Event fired!'));

//Init event 
myEmtitter.emit('someEvent');
myEmtitter.emit('someEvent');
myEmtitter.emit('someEvent');
myEmtitter.emit('someEvent');
myEmtitter.emit('someEvent');
