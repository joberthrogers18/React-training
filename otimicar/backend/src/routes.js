const route = require('express').Router();

const responsableController = require('./controllers/responsableController');
const vehicleController = require('./controllers/vehicleController');

// Routes from vehicles
route.post('/vehicle', vehicleController.store);
route.get('/vehicle', vehicleController.index);
route.get('/vehicle/:id', vehicleController.findById);
route.put('/vehicle/update/:id', vehicleController.updateVehicle);
route.delete('/vehicle/delete/:id', vehicleController.deleteVehicle);

// Routes from responsables
route.get('/responsable', responsableController.index);
route.post('/responsable', responsableController.store);
route.get('/responsable/:id', responsableController.filterById);
route.get('/responsable/:id/vehicles', responsableController.filterAllVehicles);
route.delete('/responsable/delete/:id', responsableController.deleteResponsable);
route.put('/responsable/update/:id', responsableController.updateResponsable);

module.exports = route;