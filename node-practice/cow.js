//mkdir node-practice
//cd node-practice
//npm init -y
//touch index.js cow.js
//npm install cowsay
//run this script
//npm remove cowsay

const cowsay = require('cowsay'); //import cowsay module, do not need to give location as it is a module

//assinging the function to variable speak
//export that variable
module.exports.speak = str => cowsay.say({"text":str}); //exporting our speak function // passing through a string // passing in text with the str value

