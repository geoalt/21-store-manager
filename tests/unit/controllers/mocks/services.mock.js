const validItems = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
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
    productId: 1,
    quantity: 99,
  },
  {
    productId: 1,
    quantity: 99,
  },
];

const getAll = {
  code: 200,
  content: [
    {
      saleId: 1,
      date: "2023-03-03T07:34:17.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      saleId: 1,
      date: "2023-03-03T07:34:17.000Z",
      productId: 2,
      quantity: 10,
    },
    {
      saleId: 2,
      date: "2023-03-03T07:34:17.000Z",
      productId: 3,
      quantity: 15,
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
  code: 201,
  content: {
    saleId: 1,
    itemsUpdated: updatedItems,
  },
};

const deletedItem = {
  code: 204,
  content: "",
};

const search = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
];

const newProduct = {
  id: 4,
  name: validName.name,
};

const update = {
  id: 1,
  name: validName.name,
};

module.exports = {
  getAll,
  getById,
  create,
  invalidCreate,
  invalidItems,
  updateSaleProduct,
  deletedItem,
  search,
  newProduct,
  validName,
  update,
};
