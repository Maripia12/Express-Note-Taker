// GET /notes =====> should return the notes.html file.

// GET * =====>  should return the index.html file.

const path = require("path");
const express = require("express");

const app = express();

const noteData = require("./db/db.json");

//PORT Created

const PORT = process.env.PORT || 8080;

// Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Router to html files

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});


// Api GET request

app.get("/api/notes", (req, res) => res.json(noteData));

app.post("/api/notes", (req, res) => {
  getNotes.push(req.body);
  res.json(true);
});



app.listen(PORT, () => {
console.log(`App listening on PORT: ${PORT}`);
});


