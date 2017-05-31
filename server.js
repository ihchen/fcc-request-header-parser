var express = require('express');
var os = require('os');
var app = express();

app.get('/', function(req, res) {
	var language = req.header('accept-language').split(',')[0];
	var ipaddress = req.header('x-forwarded-for') || req.connection.remoteAddress;
	var operatingSystem = req.header('user-agent').split('(')[1].split(')')[0];

	res.end(JSON.stringify({
		ipaddress: language,
		language: ipaddress,
		software: operatingSystem
	}));
});
app.listen(process.env.PORT || 8000);