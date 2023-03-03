// Controllers layer
const services = require('../services');

const getAll = async (_req, res) => {
  const result = await services.sales.getAll();
  return res.status(result.code).json(result.content);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await services.sales.getById(id);
  
  return res.status(result.code).json(result.content);
};

const create = async (req, res) => {
  const result = await services.sales.create(req.body);
  return res.status(result.code).json(result.content);
};

module.exports = {
  getAll,
  getById,
  create,
};