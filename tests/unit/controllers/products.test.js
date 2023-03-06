const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const controllers = require("../../../src/controllers");
const services = require("../../../src/services");
const mocks = require("./mocks");

describe("Na camada de CONTROLLERS, em PRODUCTS", function () {
  describe("1 - Nos endpoints do verbo GET", function () {
    it("1.1) Verifica se é possível fazer requisição de todos os produtos cadastrados (getAll)", async function () {
      // ARRANGE
      const req = {};
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.products, "getAll").resolves(mocks.services.getAll);

      // ACT
      await controllers.products.getAll(req, res);

      // ASSERT
      const { code, content } = mocks.services.getAll;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });

    it("1.2) Verifica se é possível fazer requisição de produtos por id (getById)", async function () {
      // ARRANGE
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.products, "getById").resolves(mocks.services.getById);

      // ACT
      await controllers.products.getById(req, res);

      // ASSERT
      const { code, content } = mocks.services.getById;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });

    it("1.3) Verifica se é possível fazer requisição de produtos por nome (search)", async function () {
      // ARRANGE
      const req = { query: { q: "de" } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.products, "search").resolves(mocks.services.search);

      // ACT
      await controllers.products.search(req, res);

      // ASSERT
      const { code, content } = mocks.services.search;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });

  describe("2 - Nos endpoints do verbo POST", function () {
    it("2.1) Verifica se é possível fazer requisição de cadastro para um novo produto (newProduct)", async function () {
      // ARRANGE
      const { validName } = mocks.services;

      const req = { body: validName };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(services.products, "newProduct")
        .resolves(mocks.services.newProduct);

      // ACT
      await controllers.products.newProduct(req, res);

      // ASSERT
      const { code, content } = mocks.services.newProduct;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });

  describe("3 - Nos endpoints do verbo PUT", function () {
    it("3.1) Verifica se é possível fazer requisição de atualização de um produto (update)", async function () {
      // ARRANGE
      const { validName } = mocks.services;
      const req = { params: { id: 1 }, body: validName };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(services.products, "update").resolves(mocks.services.update);

      // ACT
      await controllers.products.update(req, res);

      // ASSERT
      const { code, content } = mocks.services.update;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });

  describe("4 - Nos endpoints do verbo DELETE", function () {
    it("4.1) Verifica se é possível fazer requisição de exclusão de um produto (deleteProduct)", async function () {
      // ARRANGE
      const req = { params: { id: 1 } };
      const res = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(services.products, "deleteProduct")
        .resolves(mocks.services.deletedItem);

      // ACT
      await controllers.products.deleteProduct(req, res);

      // ASSERT
      const { code, content } = mocks.services.deletedItem;
      expect(res.status).to.have.been.calledWith(code);
      expect(res.json).to.have.been.calledWith(content);
    });
  });
});
