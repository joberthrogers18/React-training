const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResponsableSchema = Schema({
    cpf: {
        type: String,
        unique: true
    },
    nome: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        minLength: 8,
        maxLength: 8,
        required: true
    },
    logradouro: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        minLength: 9,
        maxLength: 9,
        required: true
    }
});

exports.modules = mongoose.model('responsabel', ResponsableSchema);