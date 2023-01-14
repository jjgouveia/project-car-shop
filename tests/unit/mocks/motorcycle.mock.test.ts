import IMotorcycle from '../../../src/Interfaces/IMotorcycle';

const getAllMotorcycleOutput = [
  {
    id: '63c1ea796465b3924dc49a3f',
    model: 'Celta',
    year: 2019,
    color: 'Preto',
    status: false,
    buyValue: 35.99,
    category: 'Custom',
    engineCapacity: 5,
  },
  {
    id: '63c1ea876465b3924dc49a41',
    model: 'Kwid',
    year: 2019,
    color: 'Branco',
    status: false,
    buyValue: 35.99,
    category: 'Custom',
    engineCapacity: 5,
  },
];
  
const getAMotorcycleByIdOutput = {
  id: '63c1ea876465b3924dc49a41',
  model: 'Kwid',
  year: 2019,
  color: 'Branco',
  status: false,
  buyValue: 35.99,
  category: 'Custom',
  engineCapacity: 5,
};
  
const motorcycleOutput = {
  id: '63c22165ea68c5b077f9caeb',
  model: 'Celta',
  year: 2019,
  color: 'Preto',
  status: false,
  buyValue: 35.99,
  category: 'Custom',
  engineCapacity: 5,
};
  
const motorcycleInput: IMotorcycle = {
  model: 'Celta',
  year: 2019,
  color: 'Preto',
  buyValue: 35.990,
  category: 'Custom',
  engineCapacity: 5,
};
  
const invalidID = '63c22165ea68c5b077f9cae8';
  
const notFoundMessage = {
  message: 'Car not found',
};
  
export {
  getAllMotorcycleOutput,
  getAMotorcycleByIdOutput,
  motorcycleOutput,
  motorcycleInput,
  notFoundMessage,
  invalidID,
};
