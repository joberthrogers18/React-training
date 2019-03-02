const PORT = process.env.PORT || 3003

const express = require('express');
const bodyParser = require('body-parser'); 
const server = express();
const allowCors = require('./cors');
const queryParser = require('express-query-int'); //this function is to transform the number in url in numeric because is string like: "?limit=0&skip=1"

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

server.listen(PORT, () => {
    console.log(`Backend server is running in port: ${PORT}`);
});

module.exports = server;