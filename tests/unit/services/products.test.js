const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const services = require("../../../src/services");
const models = require("../../../src/models");
const mocks = require("./mocks");

describe("Na camada de SERVICES, em PRODUCTS", function () {

  afterEach(function () {
    sinon.restore();
  });
  
  describe("1 - Nos endpoints do verbo GET", function () {
    it("1.1) Verifica se é possível fazer requisição de todos os produtos cadastrados (getAll)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.getAll;
      sinon.stub(models.products, "getAll").resolves(content);

      // ACT
      const result = await services.products.getAll();

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.equal(content);
    });

    it("1.2) Verifica se é possível fazer requisição de produtos por id (getById)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.getAll;
      sinon.stub(models.products, "getById").resolves(content[1]);

      // ACT
      const result = await services.products.getById(2);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content[1]);
    });

    it("1.3) Verifica se é retornado um erro ao fazer requisição de produtos com um id inválido - Status 404, 'Product not found',  (getById)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.invalidCreate;
      sinon.stub(models.products, "getById").resolves(false);
      
      // ACT
      const result = await services.products.getById(99);
      
      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

    it("1.4) Verifica se é possível fazer requisição de produtos por nome (search)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.getAll;
      sinon.stub(services.products, "getAll").resolves(content);
      
      // ACT
      const result = await services.products.search('Traje');
      console.log(result)

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(mocks.models.search);
    });
  });

  describe("2 - Nos endpoints do verbo POST", function () {
    it("2.1) Verifica se é possível fazer requisição de cadastro para um novo produto (newProduct)", async function () {
      // ARRANGE
      const { validName } = require("./mocks/models.mock");
      sinon.stub(models.products, "newProduct").resolves(validName.name);
      sinon.stub(models.products, "getById").resolves(mocks.models.newProduct);
      
      // ACT
      const result = await services.products.newProduct(validName.name);

      // ASSERT
      expect(result.code).to.be.equal(201);
      expect(result.content).to.be.deep.equal(mocks.models.newProduct);
    });
  });

  describe("3 - Nos endpoints do verbo PUT", function () {
    it("3.1) Verifica se é possível fazer requisição de atualização de um produto (update)", async function () {
      // ARRANGE
      sinon.stub(models.products, "update").resolves(mocks.models.update);
      sinon.stub(models.products, "getById").resolves(mocks.models.update);
      
      // ACT
      const result = await services.products.update(2, 'asda');

      // ASSERT
      expect(result.code).to.be.equal(200);
    });

    it("3.2) Verifica se é retornado um erro ao fazer requisição de atualização de um produto com id inválido - Status 404, 'Product not found' (update)", async function () {
      // ARRANGE
      sinon.stub(models.products, "getById").resolves(false);
      
      // ACT
      const result = await services.products.update(99, 'z');
      
      // ASSERT
      const {code, content} = mocks.models.invalidUpdate
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });
  });

  describe("4 - Nos endpoints do verbo DELETE", function () {
    it("4.1) Verifica se é possível fazer requisição de exclusão de um produto (deleteProduct)", async function () {
      // ARRANGE
      sinon.stub(models.products, "getById").resolves(1);
      
      // ACT
      const result = await services.products.deleteProduct(1);
      
      // ASSERT
      const {code, content} = mocks.models.deletedItem
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

    it("3.2) Verifica se é retornado um erro ao fazer requisição de exclução de um produto com id inválido - Status 404, 'Product not found' (deleteProduct)", async function () {
      // ARRANGE
      sinon.stub(models.products, "getById").resolves(false);
      
      // ACT
      const result = await services.products.deleteProduct(99);
      
      // ASSERT
      const {code, content} = mocks.models.invalidUpdate
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });
  });
});
