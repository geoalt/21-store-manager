const express = require('express');
const controllers = require('../controllers');
const middlewares = require('../middlewares');

const sales = express.Router();

sales.get('/',
  controllers.sales.getAll);

sales.get('/:id',
  controllers.sales.getById);

sales.post('/',
  middlewares.validadeProductId,
  middlewares.validadeProductQuantity,
  controllers.sales.create);

sales.put('/:id',
  middlewares.validadeProductId,
  middlewares.validadeProductQuantity,
  controllers.sales.updateSaleProduct);

sales.delete('/:id',
  controllers.sales.deleteSale);

module.exports = sales;