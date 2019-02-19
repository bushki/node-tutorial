const http = require('http');

//Create server 
http.createServer((request, response) => {
    //write response
    response.write('Hello from the node Server!');
    response.end();
}).listen(5000, ()=> console.log('Server is running...'));