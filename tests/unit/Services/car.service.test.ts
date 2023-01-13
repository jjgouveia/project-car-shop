import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { getACarByIdOutput, getAllCarsOutput } from './car.service.mock.test';

describe('Testes de Unidade da Camada CarService', function () {
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

  afterEach(function () {
    Sinon.restore();
  });
});