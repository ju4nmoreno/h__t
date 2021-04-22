const fs = require('fs');

// write txt a exist file o create a new one
fs.writeFileSync('notes.txt', 'Well to be honest');

// add append text to exist file
fs.appendFileSync('notes.txt', ' this is a second part of this');
