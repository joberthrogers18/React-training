const Vehicle = require('../models/Vehicle');

module.exports = {
  async index (req, res) {
    try {
      var vehicles = await Vehicle.find();
    }catch (error) {
      return res.json(error);
    }

    res.json(vehicles);
  },

  async store (req, res) {
    
    const { brand, model, year, price, renavam } = req.body;
    
    try {
      var vehicle = await Vehicle.create({
        brand,
        model,
        year, 
        price,
        renavam
      });

    } catch (error) {
      res.json(error);
    }

    res.json(vehicle);

  }

}