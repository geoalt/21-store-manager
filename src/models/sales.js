const connection = require('../connections');

const registerSaleDate = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
  const [result] = await connection.execute(query);

  return result.insertId;
};

module.exports = {
  registerSaleDate,
};