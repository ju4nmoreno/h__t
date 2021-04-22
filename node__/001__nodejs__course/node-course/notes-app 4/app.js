const validator = require('validator');
const getNotes = require('./notes.js');

const MSG = getNotes();

console.log(MSG);

console.log(validator.isEmail('juan@nada.com'));
console.log(validator.isEmail('@nada.com'));
