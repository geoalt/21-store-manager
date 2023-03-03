const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const sales = express.Router();

sales.get('/',
  controllers.sales.getAll);

sales.post('/',
  middlewares.validadeProductId,
  middlewares.validadeProductQuantity,
  controllers.sales.create);

module.exports = sales;