const route = require('express').Router();

const responsableController = require('./controllers/responsableController');
const vehicleController = require('./controllers/vehicleController');

route.get('/responsable', responsableController.index);
route.get('/vehicle', vehicleController.index);
route.post('/responsable', responsableController.store);
route.post('/vehicle', vehicleController.store);

module.exports = route;