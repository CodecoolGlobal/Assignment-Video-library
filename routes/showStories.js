var express = require('express');
var router = express.Router();

var fs = require('fs');

let data = fs.readFileSync('data.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(';').map(e => e.trim())); // split each line to array

let newData = [];

router.get('/', function (req, res, next) {
    /* GET users listing. */
    newData = shuffle(data).slice(0, 6);
    res.render('showStories', {data: newData});
});


module.exports = router;
