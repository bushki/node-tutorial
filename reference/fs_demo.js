const fs = require('fs');
const path = require('path');

//Create folder (async by default)
// fs.mkdir(path.join(__dirname,'test'),{}, function(err){
//     if(err) throw err;
//     console.log('Folder created..');
// });

//Create and write to file (using arrow function)
fs.writeFile(path.join(__dirname,'hello.txt'),"Hello World Yay!!", (err) =>{
    if(err) throw err;
    console.log('File written to.');
});

//Overrite file 
// fs.writeFile(path.join(__dirname,'hello.txt'),"I love node", (err) =>{
//     if(err) throw err;
//     console.log('File written to.');
// });

//File append
fs.appendFile(path.join(__dirname,'hello.txt'),"I love node", (err) =>{
    if(err) throw err;
    console.log('File written to.');
});

//Read file (need to include encoding)
fs.readFile(path.join(__dirname,'hello.txt'),'utf8', (err,data) =>{
    if(err) throw err;
    console.log(`Data in file: ${data}`);
});

//Rename file
fs.rename(path.join(__dirname,'hello.txt'),path.join(__dirname,'hello2.txt'), (err) =>{
    if(err) throw err;
    console.log('file renamed');
});


