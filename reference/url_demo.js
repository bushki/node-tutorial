//using node 6.11, different using newer versions of node
const url = require('url');
const myURL =
  url.parse('https://user:pass@sub.host.com:8080/somepath/otherpath/?query=string#hash');

//Serialized URL
console.log(myURL.href);

//Host (root domain) includes port
console.log(myURL.host);

//Hostname - no port
console.log(myURL.hostname);

//Pathname
console.log(myURL.pathname);

//Query params
console.log(myURL.search);

//Create query params object
console.log(myURL.query);
