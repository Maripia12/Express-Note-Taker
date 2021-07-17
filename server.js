

const path = require("path");
const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();


const fs = require('fs');


const { json } = require("express");
 




//PORT Created

const PORT = process.env.PORT || 8080;

// Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));





// Api Router
//GET/POST REQUEST   



app.get("/api/notes", (req, res) => {
  fs.readFile("./db/noteData.json", 'utf8', (err, data) => {

    if (err) {
      console.log(err);
      return;
    } else {
      res.send(data);
    }

  });


});



  //API POST 
 
 
 app.post("/api/notes", (req,res) => {
    req.body.id = uuidv4();
     const notes = JSON.parse(fs.readFileSync("./db/noteData.json"));
     const userNotes = req.body;
     notes.push(userNotes);
 
     fs.writeFile("./db/noteData.json" , JSON.stringify(notes) , (err) => {
      if(err) throw err;
        res.end();
     })

  
});
     
 
     
   




app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});











  
app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
});

  
        

    













    
    
   
    
    














 




