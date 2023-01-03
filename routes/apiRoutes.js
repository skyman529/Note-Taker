const app = require('express').Router();
const uuid = require('../helpers/uuid');
const fs = require("fs");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');


app.get("/notes", (req, res) =>{
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))

});
 

app.post("/notes", (req, res) =>{
  
  const {title, text} = req.body;
    
    if ( title, text){
        const notes = {
          id: uuid(),
          title,
          text,
    };

        readAndAppend(notes, "./db/db.json");
        res.json("Noted!");
        
} else {
    res.json("error please try again");
}
});

module.exports = app;