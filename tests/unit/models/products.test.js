const chai = require("chai");
const { expect } = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const models = require("../../../src/models");
const connection = require("../../../src/connections");
const mocks = require("./mocks");

chai.use(sinonChai);

describe('Na camada de MODELS, em PRODUCTS', function () {

  afterEach(function () {
    sinon.restore();
  });

  describe('1 - Nos endpoints do verbo GET', function () {

    it('1.1) Verifica se é possível acessar todos os produtos cadastrados no banco de dados (getAll)', async function () {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([mocks.db.getAll]);

      // ACT
      const result = await models.products.getAll();

      // ASSERT
      expect(result).to.be.deep.equal(mocks.db.getAll)
    })

    it('1.2) Verifica se é possível acessar por id os produto cadastrados no banco de dados (getById)', async function () {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([[mocks.db.getById]]);

      // ACT
      const result = await models.products.getById(2);

      // ASSERT
      expect(result).to.be.deep.equal(mocks.db.getById)
    })
  })

  describe('2 - Nos endpoints do verbo POST', function () {

    it('2.1) Verifica se é possível cadastrar um novo produto no banco de dados (newProduct)', async function () {
      // ARRANGE
      sinon.stub(connection, 'execute').resolves([{insertId: 4}]);

      // ACT
      const result = await models.products.newProduct(mocks.db.newProduct);

      // ASSERT
      expect(result).to.be.equal(4)
    })
  })

  describe('3 - Nos endpoints do verbo PUT', function () {

    it('3.1) Verifica se é possível atualizar um produto no banco de dados (update)', async function () {
      // ARANGE
      // ACT
      // ASSERT
    })
  })

  describe('4 - Nos endpoints do verbo DELETE', function () {

    it('4.1) Verifica se é possível deletar um produto do banco de dados (deleteProduct)', async function () {
      // ARANGE
      // ACT
      // ASSERT
    })
  })


})