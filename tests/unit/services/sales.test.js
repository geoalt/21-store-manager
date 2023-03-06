const { expect } = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const services = require("../../../src/services");
const models = require("../../../src/models");
const mocks = require("./mocks");
const validations = require('../../../src/services/validations');

describe("Na camada de SERVICES, em SALES", function () {

  describe("1 - Nos endpoints do verbo GET", function () {

  afterEach(function () {
    sinon.restore()
  })
    
    it("1.1) Verifica se é possível fazer requisição de todas as vendas registradas (getAll)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.getAll;
      sinon.stub(models.sales, 'getAll').resolves(content);

      // ACT
      const result = await services.sales.getAll();

      // ASSERT
      expect(result.code).to.be.equal(code)
      expect(result.content).to.be.deep.equal(content)
    });

    it("1.2) Verifica se é possível fazer requisição de vendas pelo id (getById)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.getById;
      sinon.stub(models.sales, 'getById').resolves(content);

      // ACT
      const result = await services.sales.getById(1);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

    it("1.3) Verifica se é retornado um erro ao fazer requisição de vendas com id inválido - Status 404, 'Product not found' - (getById)", async function () {
      // ARRANGE
      sinon.stub(models.sales, 'getById').resolves([]);
      
      // ACT
      const result = await services.sales.getById(99);
      
      // ASSERT
      const { code, content } = mocks.models.invalidGetById;
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });
  });

  describe("2 - Nos endpoints do verbo POST", function () {

    this.afterEach(function () {
      sinon.restore()
    })
    
    it("2.1) Verifica se é possível fazer requisição de cadastro para nova venda (create)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.create
      sinon.stub(models.sales, 'registerSaleDate').resolves(1);
      sinon.stub(models.salesProduct, 'registerSaleProduct').resolves(1);

      // ACT
      const result = await services.sales.create(mocks.models.validItems);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

      it("2.2) Verifica se ao fazer requisição de cadastro de um produto em uma nova venda com id inválido - Status 404, 'Product not found' - (create)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.invalidCreate
      sinon.stub(models.sales, 'registerSaleDate').resolves(1);
      sinon.stub(models.salesProduct, 'registerSaleProduct').resolves(1);
      
      // ACT
      const result = await services.sales.create(mocks.models.invalidItems);
      
      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content.message).to.be.deep.equal(content.message);
    });
  });

  describe("3 - Nos endpoints do verbo PUT", function () {

    this.afterEach(function () {
      sinon.restore()
    })

    it("3.1) Verifica se é possível fazer requisição de atualização de uma venda (updateSaleProduct)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.updateSaleProduct
      sinon.stub(models.salesProduct, 'updateSaleProduct').resolves();

      // ACT
      const result = await services.sales.updateSaleProduct(1, mocks.models.validItems);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

    it("3.2) Verifica se é retornado um erro ao fazer requisição de atualização de um produto em uma nova venda com produto inválido - Status 404, 'Product not found' - (updateSaleProduct)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.invalidCreate
      sinon.stub(models.salesProduct, 'updateSaleProduct').resolves();

      // ACT
      const result = await services.sales.updateSaleProduct(1, mocks.models.invalidItems);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

    it("3.3) Verifica se é retornado um erro ao fazer requisição de atualização uma venda com id inválido - Status 404, 'Sale not found' - (updateSaleProduct)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.invalidUpdateSaleProduct
      sinon.stub(models.salesProduct, 'updateSaleProduct').resolves();

      // ACT
      const result = await services.sales.updateSaleProduct(99, mocks.models.validItems);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });
  });

  describe("4 - Nos endpoints do verbo DELETE", function () {

    afterEach(function () {
      sinon.restore()
    });
    
    it("4.1) Verifica se é possível fazer requisição de exclusão de uma venda (deleteSale)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.deletedItem
      sinon.stub(models.sales, 'deleteSale').resolves();
      sinon.stub(models.salesProduct, 'deleteSaleProduct').resolves();

      // ACT
      const result = await services.sales.deleteSale(2);

      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });

    it("4.2) Verifica se é retornado um erro ao fazer requisição de exclusão de uma venda com id inválido - Status 404, 'Sale not found' - (getById)", async function () {
      // ARRANGE
      const { code, content } = mocks.models.invalidDeleteItem
      sinon.stub(models.sales, 'deleteSale').resolves();
      sinon.stub(models.salesProduct, 'deleteSaleProduct').resolves();

      // ACT
      const result = await services.sales.deleteSale(99);
      console.log('DELETE PRODUCT  4.2',result)
      
      // ASSERT
      expect(result.code).to.be.equal(code);
      expect(result.content).to.be.deep.equal(content);
    });
  });
});
