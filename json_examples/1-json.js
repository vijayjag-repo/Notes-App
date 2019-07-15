const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);


data.name = "Gunther";
data.age = 50;

const convertedJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json',convertedJSON);
