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

router.post('/', function (req, res, next) {
        /* GET users listing. */
        newData = [];
        const searchOptions = [req.body.searchByTitle,req.body.searchByTag];
        for (let i = 0; i <= data.length - 1; i++) {
            if (data[i][1] === searchOptions[0] || data[i][3] === searchOptions[1]) {
                newData.push(data[i]);
            }
        }
        res.render('showStories', {data: newData});
    }
);

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

module.exports = router;
