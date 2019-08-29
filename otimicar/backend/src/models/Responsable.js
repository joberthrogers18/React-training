const { Schema, model } = require('mongoose');

const ResponsableSchema = new Schema({
  
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  cnh: {
    type: String,
    required: true
  },
  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: 'vehicles'
  }]

}, {
  timestamps: true
});

module.exports = model('responsables', ResponsableSchema);