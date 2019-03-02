const _ = require('lodash');

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle; // where is the list of errors

    if(bundle.errors){
        const errors = parseErros(bundle.errors);
        res.status(500).json({errors});
    } else {
        next();
    }
}

const parseErros = (nodeRestfullErrors) => {
    const errors = [];

    _.forIn(nodeRestfullErrors, error => errors.push(error.message));
    return errors;  
}