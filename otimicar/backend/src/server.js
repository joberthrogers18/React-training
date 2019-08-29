const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config()
require('./services/database');

const PORT = process.env.PORT | 3333;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(routes);

app.listen(PORT, (error) => {
  if (error){
    return console.error(`It was not possible connect to server: ${error}`);
  }

  console.log(`Server is running in port: ${PORT}`);
});