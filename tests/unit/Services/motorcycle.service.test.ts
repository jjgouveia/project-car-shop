import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { 
  getAllMotorcycleOutput,
  getAMotorcycleByIdOutput,
  invalidID,
  motorcycleInput,
  motorcycleOutput,
} from '../mocks/motorcycle.mock.test';

describe('Testes de Unidade da Camada MotorcycleService', function () {
  it('Insere uma motocicleta com sucesso', async function () {
    Sinon.stub(Model, 'create').resolves(motorcycleOutput);
  
    const service = new MotorcycleService();
    const result = await service.createMotorcycle(motorcycleInput);
  
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  it('Lista todas as motocicletas', async function () {
    Sinon.stub(Model, 'find').resolves(getAllMotorcycleOutput);
  
    const service = new MotorcycleService();
    const result = await service.getAll();
  
    expect(result).to.be.deep.equal(getAllMotorcycleOutput);
  });
  
  it('Lista, com sucesso, uma moto por ID', async function () {
    Sinon.stub(Model, 'findById').resolves(getAMotorcycleByIdOutput);
  
    const service = new MotorcycleService();
    const result = await service.getById('63c1ea876465b3924dc49a41');
  
    expect(result).to.be.deep.equal(getAMotorcycleByIdOutput);
  });
  
  it('Retorna erro quando passado um ID válido mas inexistente', async function () {
    Sinon.stub(Model, 'findById').resolves(null);
  
    const service = new MotorcycleService();
    const result = await service.getById(invalidID);
  
    expect(result).to.be.deep.equal(null);
  });
  
  it('Atualiza uma moto no sistema através de um ID válido e existente', async function () {
    Sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);
  
    const service = new MotorcycleService();
    const result = await service.update(motorcycleOutput.id, motorcycleInput);
  
    expect(result).to.be.deep.equal(motorcycleOutput);
  });
  
  it('Exclui uma moto no sistema através de um ID válido e existente', async function () {
    Sinon.stub(Model, 'findByIdAndDelete').resolves();
    const service = new MotorcycleService();
    const result = await service.destroy(motorcycleOutput.id);
  
    expect(result).to.be.deep.equal(undefined);
  });
  
  afterEach(function () {
    Sinon.restore();
  });
});