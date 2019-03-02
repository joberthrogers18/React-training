const restful = require('node-restful');
const mongoose =  restful.mongoose;

const creditSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'O nome de credito é obrigatório'] //second parameter is validation error
    },
    value:{
        type: Number,
        min: 0,
        required: [true,'O valor de credito é obrigatório']
    }
});

const debtSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'O nome de debito é obrigatório']
    },
    value: {
        type: Number,
        min: 0,
        required: [true,'O valor de debito é obrigatório']
    },
    status: {
        type: String,
        required: false,
        uppercase: true,
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
});

const billingCycleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O atributo nome é obrigatório']
    },
    month: {
        type: Number,
        required: [true,'O atributo mês é obrigatório'],
        min: 1,
        max: 12 
    },
    year: {
        type: Number,
        min: 1970,
        max: 2100,
        required: [true, 'O ano é obrigatório']
    },
    credits: [creditSchema],
    debts: [debtSchema]
});

module.exports = restful.model('billingCycle', billingCycleSchema); 