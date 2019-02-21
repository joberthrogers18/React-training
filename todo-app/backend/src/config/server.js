const PORT = process.env.PORT || 3003; 

const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const mongoose = require('mongoose');

app.use(bodyParse.urlencoded({extended: true}));
app.use(bodyParse.json());

app.listen(PORT, () => {
    console.log(`Server runing in port ${PORT}`);
});