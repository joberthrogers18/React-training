const Responsable = require('../models/Responsable');
const Vehicle = require('../models/Vehicle');

module.exports = {

  async index (req, res) {
    try {
      var responsables = await Responsable.find().populate('vehicles');
    } catch (error) {
      return res.json(error);
    }
    
    res.json(responsables);
  },

  async store (req, res) {

    const { name, age, cpf, cnh, vehicles } = req.body;

    try {
      var responsable = await Responsable.create({
        name,
        age,
        cpf,
        cnh,
        vehicles
      });
    } catch (error) {
      return res.json(error);
    }

    res.json(responsable);

  },

  async filterById (req, res) {
  
    try {
      var responsable = await Responsable.findById(req.params.id).populate('vehicles');
    } catch (error) {
      return res.json(error);
    }
    
    res.json(responsable);

  },

  // async filterAllVehicles (req, res) {

  //   try {
  //     var responsables = await Responsable.find();
  //   } catch (error) {
  //     return res.json(error);
  //   }
    
  //   res.json(responsables);

  // }

}