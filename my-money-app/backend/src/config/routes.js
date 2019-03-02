const express = require('express');

module.exports = function(server){

    //url base for all right
    const router = express.Router();
    server.use('/api', router);

    //Routes from billing cycle
    const billingCycle = require('../api/billingCycle/billingCycleSevice');
    billingCycle.register(router, '/biliingCycles'); //register all the webservices restful (get, put, post, delete)
 
}