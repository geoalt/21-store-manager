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

const newProduct = async (req, res) => {
  const { name } = req.body;
  const result = await services.products.newProduct(name);
  return res.status(result.code).json(result.content);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await services.products.update(id, name);
  return res.status(result.code).json(result.content);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const result = await services.products.deleteProduct(id);

  return res.status(result.code).json(result.content);
};

module.exports = {
  getAll,
  getById,
  newProduct,
  update,
  deleteProduct,
};