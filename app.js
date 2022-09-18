require('dotenv').config();
const express = require('express');
const port = process.env.SERVER_PORT;

app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.render("index");
});




app.listen(port, () =>{
    console.log(`connecting to listen port ${port}`)
});