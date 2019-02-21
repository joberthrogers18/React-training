const express = require('express');

module.exports = server => {

    //API router
    const router = express.Router();
    server.use('/api', router);

    //TODO routes
    const todoService = require('../api/todo/todoService');
    todoService.register(router, '/todos'); // using all the methods allow that i declared in todoService

    
}

