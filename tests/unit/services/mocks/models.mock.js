const validItems = [
  {
    productId: 2,
    quantity: 1,
  },
  {
    productId: 3,
    quantity: 5,
  },
];

const invalidItems = [
  {
    productId: 99,
    quantity: 1,
  },
  {
    productId: 99,
    quantity: 5,
  },
];

const validName = {
  name: "ProdutoX",
};

const updatedItems = [
  {
    productId: 2,
    quantity: 1,
  },
  {
    productId: 3,
    quantity: 5,
  },
];

const getAll = {
  code: 200,
  content: [
    {
      id: 1,
      name: "Martelo de Thor",
    },
    {
      id: 2,
      name: "Traje de encolhimento",
    },
    {
      id: 3,
      name: "Escudo do Capitão América",
    },
  ],
};

const getById = {
  code: 200,
  content: [
    {
      date: "2023-03-03T07:34:17.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      date: "2023-03-03T07:34:17.000Z",
      productId: 2,
      quantity: 10,
    },
  ],
};

const invalidGetById = {
  code: 404,
  content: { message: "Sale not found" },
};

const create = {
  code: 201,
  content: {
    id: 1,
    itemsSold: validItems,
  },
};

const invalidCreate = {
  code: 404,
  content: { message: "Product not found" },
};

const updateSaleProduct = {
  code: 200,
  content: {
    saleId: 1,
    itemsUpdated: updatedItems,
  },
};

const invalidUpdateSaleProduct = {
  code: 404,
  content: { message: "Sale not found" },
};

const deletedItem = {
  code: 204,
  content: "",
};

const invalidDeleteItem = {
  code: 404,
  content: { message: "Sale not found" },
};

const search = [
  {
    id: 2,
    name: 'Traje de encolhimento'
  }
];

const newProduct = {
  id: 4,
  name: validName.name,
};

const update = {
  id: 4,
  name: 'Updated Item',
};

const invalidUpdate = {
  code: 404,
  content: { message: "Product not found" },
};

module.exports = {
  getAll,
  getById,
  create,
  invalidCreate,
  validItems,
  invalidItems,
  invalidGetById,
  updateSaleProduct,
  deletedItem,
  search,
  newProduct,
  validName,
  update,
  invalidUpdate,
  updatedItems,
  invalidDeleteItem,
  invalidUpdateSaleProduct
};
