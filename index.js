const express = require("express");
const mongodb = require("mongodb");
const app = express();
let MongoClient = mongodb.MongoClient;


app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())




app.listen(3000);