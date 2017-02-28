var express = require('express');
var app = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//parse all bodies as strings
app.use(bodyParser.text());
// ^^ This overrides json

app.use(bodyParser.raw());
// ^^ You won't use this one much until You
// learn about node streams, which is outside
// the scope of this talk