const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const models = require("../../../src/models");
const connection = require("../../../src/connections");
const mocks = require("./mocks");

chai.use(sinonChai);

describe('Na camada de MODELS, em SALES', function () {

  afterEach(function () {
    sinon.restore();
  });

  describe('1 - Nos endpoints do verbo GET', function () {

    it('1.1) Verifica se é possível acessar todas as vendas cadastradas no banco de dados (getAll)', async function () {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([mocks.db.salesGetAll]);

      // ACT
      const result = await models.sales.getAll();

      // ASSERT
      expect(result).to.be.deep.equal(mocks.db.salesGetAll)
    })

    it('1.2) Verifica se é possível recuperar por id as vendas cadastradas no banco da dados (getById)', async function () {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([mocks.db.salesGetById]);

      // ACT
      const result = await models.sales.getById(2);

      // ASSERT
      expect(result).to.be.deep.equal(mocks.db.salesGetById)
    })
  })

  describe('2 - Nos endpoints do verbo POST', function () {

    it('2.1) Verifica se é possível cadastrar uma nova venda no banco de dados (registerSaleDate)', async function () {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([{insertId: 3}]);

      // ACT
      const result = await models.sales.registerSaleDate();
      console.log('AKJSHKEDHAHKASD', result)

      // ASSERT
      expect(result).to.be.equal(3)
    })
  })

  describe('3 - Nos endpoints do verbo DELETE', function () {

    it('3.1) Verifica se é possível deletar uma venda do banco de dados (deleteSale)', async function () {
      // ARANGE
      // ACT
      // ASSERT
    })
  })


})