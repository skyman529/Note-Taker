const express = require("express");
const app = express();
const fs = require("fs");
const PORT = process.env.PORT || 3001;

// get the ntes
app.get("/api/notes",(req,res)=>{
    fs.readFile(__dirname + "/" + "./db.json", "utf8", (err, data) => 
    {
        let notes = JSON.parse(data);
        res.send(notes);
        console.log("notes found");
    })
});


let data = JSON.stringify(noteTwo);

fs.writeFile("./db.json", data, (err) => {
    if(err) throw (err);
    console.log("data is written to file")
})
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);