const connection = require('../connections');

const registerSaleProduct = async (saleId, items) => {
  const query = `INSERT INTO 
    StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?,?,?)`;
  
  const result = await connection.execute(query, [saleId, items.productId, items.quantity]);

  return result.insertId;
};

module.exports = {
  registerSaleProduct,
};