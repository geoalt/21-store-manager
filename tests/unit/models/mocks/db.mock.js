const getAll = [
  {
    "id": 2,
    "name": "Traje de encolhimento"
  }
];

const getById = {
	"id": 2,
	"name": "Traje de encolhimento"
}

const newProductBody = {
  "name": "sdsss"
}

const newProduct = {
	"id": 4,
	"name": "sdsss"
}

const salesGetAll = [
  {
    "saleId": 1,
    "date": "2023-03-06T01:26:02.000Z",
    "productId": 2,
    "quantity": 10
  },
  {
    "saleId": 2,
    "date": "2023-03-06T01:26:02.000Z",
    "productId": 3,
    "quantity": 15
  }
];

const salesGetById = [
  {
    "date": "2023-03-06T01:26:02.000Z",
    "productId": 3,
    "quantity": 15
  }
];

module.exports = {
  getAll,
  getById,
  newProductBody,
  newProduct,
  salesGetAll,
  salesGetById,
}