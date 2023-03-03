const models = require('../../models');

const generateIds = async () => {
  const products = await models.products.getAll();

  return products.map((it) => it.id);
};

const comparesIds = async (sale) => {
  const idList = await generateIds();
  
  for (let i = 0; i < sale.length; i += 1) {
    if (!idList.includes(sale[i].productId)) {
      return { code: 404, content: 'Product not found' };
    }
  }
  
  return false;
};

module.exports = { comparesIds };