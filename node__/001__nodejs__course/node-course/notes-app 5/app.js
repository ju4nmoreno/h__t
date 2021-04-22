const chalk = require('chalk');
const getNotes = require('./notes.js');

const MSG = getNotes();

console.log(chalk.green(MSG));
console.log(chalk.bgGreen.bold(MSG));

console.log(chalk.bgRed.italic('well to be honest'));
