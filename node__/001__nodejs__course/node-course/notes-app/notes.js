const fs = require('fs');
const chalk = require('chalk');
const getNotes = function () {
  return 'Success!';
};

const addNote = function (title, body) {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (!duplicateNotes.length) {
    notes.push({
      title,
      body,
    });

    console.log(chalk.bgGreen('New note added!'));
  } else {
    console.log(chalk.bgRed('note title taken!'));
  }

  saveNotes(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notesToKeep.length < notes.length) {
    console.log(chalk.bgGreen(' Note removed! '));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed(' No note found! '));
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes, addNote, removeNote };
