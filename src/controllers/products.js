// Controllers layer
const services = require('../services');

const getAll = async (_req, res) => {
  const result = await services.products.getAll();
  return res.status(result.code).json(result.content);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await services.products.getById(id);
  return res.status(result.code).json(result.content);
};

module.exports = {
  getAll,
  getById,
};