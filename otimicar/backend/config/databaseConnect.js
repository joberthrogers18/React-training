const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/otimicar";

mongoose.connect(URL, {useNewUrlParser: true})
    .then((db) => {
        console.log(`Mongo is connect`);
    })
    .catch(err => {
        console.log(`Error to connect with mongo: ${err}`);
    });

module.exports = mongoose;

    