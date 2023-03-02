const models = require('../models');

const getAll = async () => {
  const result = await models.products.getAll();
  return { code: 200, content: result };
};

const getById = async (id) => {
  const result = await models.products.getById(id);

  if (!result) {
    return { code: 404, content: { message: 'Product not found' } };
  }

  return { code: 200, content: result };
};

module.exports = {
  getAll,
  getById,
};