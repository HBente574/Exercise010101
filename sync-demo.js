/*

file name: sync-demo.js
author: heather bente
date: wed jan 9 2019

*/

var fs = require('fs'); // load in file system package, give variable same name as content in string

var data = fs.readdirSync('\/'); // read stuff from file system
console.log("data: ", data); 

console.log("this code is executed last.");