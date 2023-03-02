const express = require('express');
const controllers = require('../controllers');

const products = express.Router();

products.get('/', controllers.products.getAll);
products.get('/:id', controllers.products.getById);

products.post('/', controllers.products.newProduct);

module.exports = products;