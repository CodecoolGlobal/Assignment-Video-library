var express = require("express");
var router = express.Router();
var fs = require('fs');
var csvWriter = require('csv-write-stream')
var writer = csvWriter()

router.get('/', function (req, res, next) {
    // var newUser = req.body.newUser;
    res.render('addStoryPanel');
});

router.post('/', function (req, res, next) {
    var newData = [req.body.title_story, req.body.user_story, req.body.acceptance_criteria,
        req.body.business_value, req.body.estimation];
    console.log(newData[0]);
    console.log(newData[1]);
    console.log(newData[2]);
    console.log(newData[3]);
    console.log(newData[4]);
    writer = csvWriter({sendHeaders: false});
    writer.pipe(fs.createWriteStream('data.csv', {flags: 'a'}));
    writer.write({
        header1: newData[0],
        header2: newData[1],
        header3: newData[2],
        header1: newData[3],
        header2: newData[4],
        header3: newData[5]
    });
    writer.end();
    res.redirect("/showStories");
});

module.exports = router;