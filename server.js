var express = require('express');
var app = express();

var ip = "x-forwarded-for";
var language = "accept-language";
var software = "user-agent";

app.get('/', function (req, res) {
    res.status(200);
    // Send the parsed header object in the response
    res.send(
        {
            "ip address": req.headers[ip],
            "language": req.headers[language].match(/(.*),/)[1],
            "software": req.headers[software].match(/\((.*)\)/)[1]
        }
    );
});

app.listen(8080);
