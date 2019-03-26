const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VehicleSchema = Schema({
    renavam: {
        type: String,
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: new Date.getFullYear()
    },
    model: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('vehicle', VehicleSchema);