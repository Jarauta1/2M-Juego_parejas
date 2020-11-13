const express = require("express");
const mongodb = require("mongodb");
const app = express();
let MongoClient = mongodb.MongoClient;

let imagenes = require("./imagenes")
let imagenes = require("./imagenes")

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


app.use("/imagenes", imagenes)

app.listen(3000);