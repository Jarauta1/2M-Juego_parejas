const express = require("express");
const router = express.Router();

let array = require("./array")

router.get("/", function(req, res) {
    let db = req.app.locals.db

    res.send(array)
})

module.exports = router;