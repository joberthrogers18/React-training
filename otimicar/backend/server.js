const express = require('express');
const app = express();
const database = require('./config/databaseConnect');
const bodyParser = require('body-parser');
const Routes = require('./src/routes/routes');

const PORT = 3003;

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(Routes);

app.listen(PORT, () => {
    console.log(`The serve is avaiable in port ${PORT}`);
});

