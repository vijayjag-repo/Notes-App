const fs = require('fs');
const getNotes = function(){
    return("Hello this is my note")
};

const addNote = function(title,body){
    const notes = loadNote();
    const duplicate = notes.filter(function(notes){
        return(notes.title===title);
    });

    if(duplicate.length===0){
        notes.push({
            title: title,
            body: body
        });
        saveNote(notes);
        console.log("Note added");
    }
    else{
        console.log("This title is taken already");
    }
    
};

const saveNote = function(notes){
    const newdata = JSON.stringify(notes);
    fs.writeFileSync('notes.json',newdata);
};

const loadNote = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return(JSON.parse(dataJSON));
    }
    catch(e){
        return([])
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote
};