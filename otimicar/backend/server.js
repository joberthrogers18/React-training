const express = require('express');
const app = express();
const databse = require('./config/databaseConnect');


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`The serve is avaiable in port ${PORT}`);
});

