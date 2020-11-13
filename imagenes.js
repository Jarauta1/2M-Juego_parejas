const express = require("express");
const router = express.Router();

let array = require("./array")

router.get("/", function(req, res) {
    let db = req.app.locals.db

    let i = Math.random() * (3 - 0) + 0;

    res.send(array[i].imagen)
})

module.exports = router;