const PORT = process.env.PORT || 3003; 

const express = require('express');
const bodyParse = require('body-parser');
const server = express();

const allowCors = require('./cors');

server.use(bodyParse.urlencoded({extended: true}));
server.use(bodyParse.json());
server.use(allowCors);

server.listen(PORT, () => {
    console.log(`Server runing in port ${PORT}`);
});

module.exports = server;