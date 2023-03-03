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

const newProduct = async (name) => {
  const result = await models.products.newProduct(name);
  const { content } = await getById(result);

  return { code: 201, content };
};

const update = async (id, name) => {
  await models.products.update(id, name);
  const { content } = await getById(id);

  if (content.message) {
    return { code: 404, content: { message: 'Product not found' } };
  }

  return { code: 200, content };
};

const deleteProduct = async (id) => {
  const { content } = await getById(id);
  
  if (content.message) {
    return { code: 404, content: { message: 'Product not found' } };
  }

  await models.products.deleteProduct(id);
  
  return { code: 204, content: '' };
};

const search = async (query) => {
  // const result = await models.products.search(query); 
  // return { code: 200, content: result };

  const result = await getAll();

  console.log(result);
  const products = result.content
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));
  
  return { code: 200, content: products };
};

module.exports = {
  getAll,
  getById,
  newProduct,
  update,
  deleteProduct,
  search,
};