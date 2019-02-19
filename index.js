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
    //console.log('resp from server');
    // console.log(req.url);

    // if(req.url === '/') {
    //     //read file
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'),
    //     (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }
    // if(req.url === '/about') {
    //     //read file
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'),
    //     (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, {'Content-Type': 'text/html'});
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Bob', age: 40},
    //         {name: 'Jane', age: 20}
    //     ];
    //     res.writeHead(200, {'Content-Type': 'application/json'});
    //     res.end(JSON.stringify(users));
    // }
    
    //Build file path 
    let filePath = path.join(__dirname, 'public', 
        req.url === '/' ? 'index.html' : req.url);
    //console.log(filePath);
    let extname = path.extname(filePath);

    //Default content type 
    let contentType = 'text/html';

    //Check extension and set content type 
    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
    }
    console.log('Content-Type: ', contentType);

    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                //Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'),
                 (err, content) => {
                    res.writeHead(200, 'text/html');
                    res.end(content, 'utf8');
                });
            } else {
                //some other server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            //success 200 
            res.writeHead(200, contentType);
            res.end(content, 'utf8');
        }
    });

    // res.writeHead(200, contentType);
    // console.log(contentType);
    // res.end();
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//server.listen(PORT);