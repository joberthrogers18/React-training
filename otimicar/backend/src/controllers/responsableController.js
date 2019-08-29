const Responsable = require('../models/Responsable');

module.exports = {

  async index (req, res) {
    try {
      var responsables = await Responsable.find();
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

  }

}