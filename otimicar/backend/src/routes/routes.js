const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Load the models
require('../models/Responsable');
const Responsable = mongoose.model('responsable');

router.get('/', (req, res) => {
    Responsable.find({})
        .then(data => {
            res.json(data);
        }).catch( err => {
            res.json(`Error to load the data: ${err}`);
        })
});


router.post('/', (req, res) => {
    Responsable.create({
        cpf: '06577058105',
        name: 'Jobs',
        cep: '72015570',
        phone: '991067698',
        address: 'Qsb 08 casa 22',
    }).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.json({msg: `Error to send: ${err}`});
    });
});

module.exports = router;