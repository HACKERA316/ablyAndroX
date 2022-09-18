const express = require('express');
const ejsLayout = require('express-ejs-layouts');
const path = require('path');

app = express();

app.set('views engine',"ejs");
app.set('views',(express.static(__dirname+"/views")));
