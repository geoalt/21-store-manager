const connection = require('../connections');

const getAll = async () => {
  const query = `
SELECT 
  sp.sale_id AS saleId, 
  s.date,
  sp.product_id AS productId,
  sp.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id;`;
  
  const [result] = await connection.execute(query);

  return result;
};

const getById = async (id) => {
  const query = `
SELECT 
  s.date,
  sp.product_id AS productId,
  sp.quantity
  FROM StoreManager.sales AS s
  INNER JOIN StoreManager.sales_products AS sp
  ON s.id = sp.sale_id
  WHERE id =  ?`;
  
  const [result] = await connection.execute(query, [id]);

  return result;
};

const registerSaleDate = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [result] = await connection.execute(query);

  return result.insertId;
};

module.exports = {
  getAll,
  getById,
  registerSaleDate,
};