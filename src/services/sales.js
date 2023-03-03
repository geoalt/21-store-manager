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

const updateSaleProduct = async (id, sales) => {
  const error = await validations.comparesIds(sales);

  if (error) {
    return { code: error.code, content: { message: error.content } };
  }

  const result = await models.sales.getById(id);

  if (result.length < 1) {
    return { code: 404, content: { message: 'Sale not found' } };
  }
  
  await Promise.all(sales.map(async (it) => {
    models.salesProduct.updateSaleProduct(id, it);
  }));

  return {
    code: 200,
    content: {
      saleId: id,
      itemsUpdated: sales,
  } };
};

const deleteSale = async (id) => {
  const result = await models.sales.getById(id);

  if (result.length < 1) {
    return { code: 404, content: { message: 'Sale not found' } };
  }
  
  await models.salesProduct.deleteSaleProduct(id);
  await models.sales.deleteSale(id);
  return { code: 204, content: '' };
};

module.exports = {
  getAll,
  getById,
  create,
  updateSaleProduct,
  deleteSale,
};