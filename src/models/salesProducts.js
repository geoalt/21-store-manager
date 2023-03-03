const connection = require('../connections');

const registerSaleProduct = async (saleId, items) => {
  const query = `INSERT INTO 
    StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?,?,?)`;
  
  const result = await connection.execute(query, [saleId, items.productId, items.quantity]);

  return result.insertId;
};

const updateSaleProduct = async (id, sales) => {
  const query = `
  UPDATE StoreManager.sales_products 
    SET product_id = ?, quantity = ? 
    WHERE sale_id = ?
    AND product_id = ? `;
  
  console.log('ID', id, 'SALES', sales);
  await connection.execute(query, [sales.productId, sales.quantity, id, sales.productId]);
};

const deleteSaleProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?';
  await connection.execute(query, [id]);
};

module.exports = {
  registerSaleProduct,
  updateSaleProduct,
  deleteSaleProduct,
};