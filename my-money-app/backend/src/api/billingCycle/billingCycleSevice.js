const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
//new: always return object update after put method, runValidator: count put method with validators present in model
BillingCycle.updateOptions({new: true, runValidators: true}) // this option is used for validate the fields required in model, because the validate occur only in post method , if not use it

module.exports = BillingCycle;