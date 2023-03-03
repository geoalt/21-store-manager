const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const products = express.Router();

products.get('/',
  controllers.products.getAll);

products.get('/search',
  controllers.products.search);
  
products.get('/:id',
  controllers.products.getById);

products.post('/',
  middlewares.validadeName,
  controllers.products.newProduct);

products.put('/:id',
  middlewares.validadeName,
  controllers.products.update);

products.delete('/:id',
  controllers.products.deleteProduct);

module.exports = products;