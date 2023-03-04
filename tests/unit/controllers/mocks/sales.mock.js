const serviceValidItems = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

const serviceInvalidItems = [
  {
    productId: 99,
    quantity: 1,
  },
  {
    productId: 99,
    quantity: 5,
  },
];

const serviceUpdatedItems = [
  {
    productId: 1,
    quantity: 99,
  },
  {
    productId: 1,
    quantity: 99,
  },
];

const serviceGetAll = {
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

const serviceGetById = {
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

const serviceInvalidGetById = {
  code: 404,
  content: { message: "Sale not found" },
};

const serviceCreate = {
  code: 201,
  content: {
    id: 1,
    itemsSold: serviceValidItems,
  },
};

const serviceInvalidCreate = {
  code: 404,
  content: { message: "Product not found" },
};

const serviceUpdateSaleProduct = {
  code: 201,
  content: {
    saleId: 1,
    itemsUpdated: serviceUpdatedItems,
  },
};

const serviceDeleteSale = {
  code: 204,
  content: "",
};

module.exports = {
  serviceGetAll,
  serviceGetById,
  serviceCreate,
  serviceInvalidCreate,
  serviceInvalidItems,
  serviceUpdateSaleProduct,
  serviceDeleteSale,
};
