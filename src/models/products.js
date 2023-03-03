const connection = require('../connections');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [result] = await connection.execute(query);

  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [[result]] = await connection.execute(query, [id]);

  return result;
};

const newProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [result] = await connection.execute(query, [name]);

  return result.insertId;
};

const update = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  await connection.execute(query, [name, id]);
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id = ?';
  await connection.execute(query, [id]);
};

// const search = async (q) => {
//   const query = 'SELECT * FROM StoreManager.products WHERE name LIKE "%?%"';

//   console.log(q);
//   const result = await connection.execute(query, [q]);

//   return result;
// };

module.exports = {
  getAll,
  getById,
  newProduct,
  update,
  deleteProduct,
  // search,
};