const route = require('express').Router();

const responsableController = require('./controllers/responsableController');
const vehicleController = require('./controllers/vehicleController');

route.post('/vehicle', vehicleController.store);
route.get('/vehicle', vehicleController.index);

route.get('/responsable', responsableController.index);
route.post('/responsable', responsableController.store);
route.get('/responsable/:id', responsableController.filterById);
route.get('/responsable/:id/vehicles', responsableController.filterAllVehicles);
route.delete('/responsable/delete/:id', responsableController.deleteResponsable);
route.put('/responsable/update/:id', responsableController.updateResponsable);

module.exports = route;