

const path = require("path");
const express = require("express");
const app = express();


const fs = require('fs');

const noteData = require("./db/noteData");



//PORT Created

const PORT = process.env.PORT || 8080;

// Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



//Router to html files
//HTML GET requests



app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


// Api Router
//GET/POST REQUEST   



app.get("/api/notes", (req,res) => {
  res.json(noteData);

  // console.log('get request');
});

app.post("/api/notes", (req,res) => {
    noteData.push(req,body);
    res.json(true);


});

//








    
    
   
    
    














 


app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
});


