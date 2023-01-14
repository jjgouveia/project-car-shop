import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { 
  carInput,
  carOutput,
  getACarByIdOutput,
  getAllCarsOutput,
  invalidID,
} from '../mocks/car.service.mock.test';

describe('Testes de Unidade da Camada CarService', function () {
  it('Insere um carro com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.createCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });
  it('Lista todos os carros', async function () {
    Sinon.stub(Model, 'find').resolves(getAllCarsOutput);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(getAllCarsOutput);
  });

  it('Lista, com sucesso, um carro por ID', async function () {
    Sinon.stub(Model, 'findById').resolves(getACarByIdOutput);

    const service = new CarService();
    const result = await service.getById('63c1ea876465b3924dc49a41');

    expect(result).to.be.deep.equal(getACarByIdOutput);
  });

  it('Retorna erro quando passado um ID válido mas inexistente', async function () {
    Sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.getById(invalidID);

    expect(result).to.be.deep.equal(null);
  });

  it('Atualiza um carro no sistema através de um ID válido e existente', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const service = new CarService();
    const result = await service.update(carOutput.id, carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Exclui um carro no sistema através de um ID válido e existente', async function () {
    Sinon.stub(Model, 'findByIdAndDelete').resolves();
    const service = new CarService();
    const result = await service.destroy(carOutput.id);

    expect(result).to.be.deep.equal(undefined);
  });

  afterEach(function () {
    Sinon.restore();
  });
});