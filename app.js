const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
//add,remove,read,list

//add
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body);
    }
});

//remove
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function(){
        console.log("Removing a note");
    }
});

//list
yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function(){
        console.log("These are the notes");
    }
});
//read
yargs.command({
    command: 'read',
    describe: 'read notes',
    handler: function(){
        console.log("Read the notes");
    }
});

yargs.parse();