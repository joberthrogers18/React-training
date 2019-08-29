const { Schema, model, Types } = require('mongoose');

const VehicleSchema = new Schema({
  
  brand: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  price: {
    type: Types.Decimal128,
    required: true
  },
  renavam: {
    type: String,
    required: true
  }

}, {
  timestamps: true
});

module.exports = model('vehicles', VehicleSchema);