// Controllers layer
const services = require('../services');

const getAll = async (_req, res) => {
  const result = await services.sales.getAll();
  return res.status(result.code).json(result.content);
};

const create = async (req, res) => {
  const result = await services.sales.create(req.body);
  return res.status(result.code).json(result.content);
};

module.exports = {
  getAll,
  create,
};