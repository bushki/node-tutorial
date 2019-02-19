// const person = require('./person');
// const Person = require('./person-class');
// console.log(person);

// //person from class
// const person1 = new Person('John', 45);
// person1.greeting();

// const Logger = require('./logger');

// const logger = new Logger();
// logger.on('message', (data) => 
// console.log('Called Listener:',data)
// );

// logger.log('Hello logger!');
// logger.log('Hi');
// logger.log('Bye');

require('dotenv').load();

const http = require('http');
const path = require('path');
const fs = require('fs');

//env 
const PORT = parseInt(process.env.PORT) || 5000;
//console.log(PORT);
console.log(process.env.SOMETHING);

const server = http.createServer((req, res) => {
    console.log('resp from server');
    console.log(req.url);

    if(req.url === '/') {
        //read file
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
        (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    if(req.url === '/about') {
        //read file
        fs.readFile(path.join(__dirname, 'public', 'about.html'),
        (err, content) => {
            if(err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }

    if(req.url === '/api/users') {
        const users = [
            {name: 'Bob', age: 40},
            {name: 'Jane', age: 20}
        ];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//server.listen(PORT);