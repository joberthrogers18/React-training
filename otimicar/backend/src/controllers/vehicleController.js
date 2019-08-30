const Vehicle = require('../models/Vehicle');

module.exports = {
  async index (req, res) {
    try {
      var vehicles = await Vehicle.find();
    }catch (error) {
      return res.json({ "msg": `Erro ao buscar: ${error}`});
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
      res.json({ "msg": `Erro ao salvar: ${error}`});
    }

    res.json(vehicle);

  },

  async findById (req, res) {
    
    const { id } = req.params;

    try {
      var vehicle = await Vehicle.findById(id);
    }catch (error) {
      return res.json({ "msg": `Erro ao buscar: ${error}`});
    }

    res.json(vehicle);
  },

  async deleteVehicle (req, res ) {

    const { id } = req.params;

    try {
      await Vehicle.findByIdAndRemove(id);
    } catch (error) {
      return res.json({ "msg": `Erro ao deletar: ${error}`});
    }

    res.json({"msg": "Veiculo removido com sucesso"});
  },

  async updateVehicle (req, res) {

    const { id } = req.params;

    try {
      await Vehicle.findByIdAndUpdate(id, req.body);
    } catch (error) {
      return res.json({ "msg": `Erro ao atualizar: ${error}`});
    }

    res.json({"msg": "Atualizado com sucesso"});
  }

}