const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const controllers = require("../../../src/controllers");
const services = require("../../../src/services");
const mocks = require("./mocks");

chai.use(sinonChai);

describe("Na camada de CONTROLLERS, em SALES", function () {
  describe("1 - Nos endpoints do verbo GET", function () {
    it("1.1) Verifica se é possível fazer requisição de todas as vendas registradas (getAll)", async function () {
      // ARRANGE
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.sales, "getAll").resolves(mocks.services.getAll);

      // ACT
      await controllers.sales.getAll(req, res);

      // ASSERT
      const { code, content } = mocks.services.getAll;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });

    it("1.2) Verifica se é possível fazer requisição de vendas pelo id (getById)", async function () {
      // ARRANGE
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.sales, "getById").resolves(mocks.services.getById);

      // ACT
      await controllers.sales.getById(req, res);

      // ASSERT
      const { code, content } = mocks.services.getById;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });

  describe("2 - Nos endpoints do verbo POST", function () {
    afterEach(function () {
      sinon.restore();
    });

    it("2.1) Verifica se é possível fazer requisição de cadastro para nova venda (create)", async function () {
      // ARRANGE
      const {
        content: { itemsSold: items },
      } = mocks.services.create;

      const req = { body: items };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.sales, "create").resolves(mocks.services.create);

      // ACT
      await controllers.sales.create(req, res);

      // ASSERT
      const { code, content } = mocks.services.create;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });

    // it("2.2) Verifica se é retornado um erro ao fazer requisição de cadastro de um produto em uma nova venda com id inválido - Status 404, 'Product not found' - (comparesIds)", async function () {
    //   // ARRANGE
    //   const req = { body: mocks.sales.serviceInvalidItems };
    //   const res = {};

    //   res.status = sinon.stub().returns(res);
    //   res.json = sinon.stub().returns();

    //   sinon
    //     .stub(services.sales, "create")
    //     .resolves(mocks.sales.serviceInvalidCreate);

    //   // ACT
    //   await controllers.sales.create(req, res);

    //   // ASSERT
    //   const { code, content } = mocks.sales.serviceInvalidCreate;
    //   expect(res.status).to.have.been.calledWith(code);
    //   expect(res.json).to.have.been.calledWith(content);
    // });
  });

  describe("3 - Nos endpoints do verbo PUT", function () {
    it("3.1) Verifica se é possível fazer requisição de atualização de uma venda (updateSaleProduct)", async function () {
      // ARRANGE
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(services.sales, "updateSaleProduct")
        .resolves(mocks.services.updateSaleProduct);

      // ACT
      await controllers.sales.updateSaleProduct(req, res);

      // ASSERT
      const { code, content } = mocks.services.updateSaleProduct;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });

  describe("4 - Nos endpoints do verbo DELETE", function () {
    it("4.1) Verifica se é possível fazer requisição de exclusão de uma venda (deleteSale)", async function () {
      // ARRANGE
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(services.sales, "deleteSale")
        .resolves(mocks.services.deletedItem);

      // ACT
      await controllers.sales.deleteSale(req, res);

      // ASSERT
      const { code, content } = mocks.services.deletedItem;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });
});
