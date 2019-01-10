/*

file name: async-demo.js
author: heather bente
date: thurs jan 10 2019

*/

var fs = require('fs'); // load in file system package, give variable same name as content in string

function phoneNumber(err, data) {
    console.log("data: ", data); 
}

fs.readdir('/', phoneNumber); // read stuff from file system

console.log("this code is executed last.");