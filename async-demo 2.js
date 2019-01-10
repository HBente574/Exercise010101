/*

file name: async-demo 2.js
author: heather bente
date: thurs jan 10 2019

*/

var fs = require('fs'); // load in file system package, give variable same name as content in string

fs.readdir('/', function(err, data) {
    console.log("data: ", data); 
});

console.log("this code is executed last.");