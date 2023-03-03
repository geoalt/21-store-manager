const models = require('../models');
const validations = require('./validations');

const getAll = async () => {
  const result = await models.sales.getAll();
  return { code: 200, content: result };
};

const getById = async (id) => {
  const result = await models.sales.getById(id);

  if (result.length < 1) {
    return { code: 404, content: { message: 'Sale not found' } };
  }

  return { code: 200, content: result };
};

const create = async (items) => {
  const error = await validations.comparesIds(items);

  if (error) {
    return { code: error.code, content: { message: error.content } };
  }

  const saleDateResult = await models.sales.registerSaleDate();
  await Promise.all(items.map(async (it) => {
    models.salesProduct.registerSaleProduct(saleDateResult, it);
  }));

  return {
    code: 201,
    content: {
      id: saleDateResult,
      itemsSold: items,
  } };
};

module.exports = {
  getAll,
  getById,
  create,
};