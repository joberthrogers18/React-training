const BillingCycle = require('./billingCycle');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
//new: always return object update after put method, runValidator: count put method with validators present in model
BillingCycle.updateOptions({new: true, runValidators: true}) // this option is used for validate the fields required in model, because the validate occur only in post method , if not use it

BillingCycle.route('count', (req, res, next) => { // route count , return the number of billing cycles
    BillingCycle.count((error, value) => {
        if(error){
            res.status(500).json({errors: [error]})
        } else{
            res.status(200).json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: { credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}} // take all the credits and debts value and sum
    }, {
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} // group by in mysql and sum the result of all credits and debits of all registers
    },{
        $project: {_id: 0, credit: 1, debt: 1} //this is mean wht will apear in result final 0 = false, and 1 is true
    }, (error, result) => {
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json(result[0] ||{credit: 0, debt: 0}); // back register from agragate, if is not back 0 to debt and credit
        }
    })
});

module.exports = BillingCycle;