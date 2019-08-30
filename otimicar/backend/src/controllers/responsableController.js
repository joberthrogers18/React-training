const Responsable = require('../models/Responsable');
const Vehicle = require('../models/Vehicle');

module.exports = {

  async index (req, res) {
    try {
      var responsables = await Responsable.find().populate('vehicles');
    } catch (error) {
      return res.json({ "msg": `Erro ao buscar: ${error}`});
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
      return res.json({ "msg": `Erro ao salvar: ${error}`});
    }

    res.json(responsable);

  },

  async filterById (req, res) {
  
    try {
      var responsable = await Responsable.findById(req.params.id).populate('vehicles');
    } catch (error) {
      return res.json({ "msg": `Erro ao buscar: ${error}`});
    }
    
    res.json(responsable);

  },

  async filterAllVehicles (req, res) {

    try {
      var responsables = await Responsable.find(req.body.id).populate('vehicles');
    } catch (error) {
      return res.json({ "msg": `Erro ao buscar: ${error}`});
    }

    res.json(responsables[0]["vehicles"]);

  },

  async deleteResponsable (req, res) {

    const { id } = req.params; 

    try {
      await Responsable.findByIdAndRemove(id);
    } catch (error) {
      return res.json({ "msg": `Erro ao deletar: ${error}`});
    }

    res.json({"success": "Remoção feita com sucesso"});

  },

  async updateResponsable (req, res) {

    const { id } = req.params;

    try{
      await Responsable.findByIdAndUpdate(id, req.body);
    } catch (error){
      return res.json({ "msg": `Erro ao atualizar: ${error}`});
    }

    res.json({"success": "Atualizado com sucesso"});
  }

}