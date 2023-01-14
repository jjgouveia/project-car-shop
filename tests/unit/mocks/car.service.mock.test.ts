const getAllCarsOutput = [
  {
    id: '63c1ea796465b3924dc49a3f',
    model: 'Celta',
    year: 2019,
    color: 'Preto',
    status: false,
    buyValue: 35.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '63c1ea876465b3924dc49a41',
    model: 'Kwid',
    year: 2019,
    color: 'Branco',
    status: false,
    buyValue: 35.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const getACarByIdOutput = {
  id: '63c1ea876465b3924dc49a41',
  model: 'Kwid',
  year: 2019,
  color: 'Branco',
  status: false,
  buyValue: 35.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput = {
  id: '63c22165ea68c5b077f9caeb',
  model: 'Celta',
  year: 2019,
  color: 'Preto',
  status: false,
  buyValue: 35.99,
  doorsQty: 4,
  seatsQty: 5,
};

const carInput = {
  model: 'Celta',
  year: 2019,
  color: 'Preto',
  buyValue: 35.990,
  doorsQty: 4,
  seatsQty: 5,
};

const invalidID = '63c22165ea68c5b077f9cae8';

const notFoundMessage = {
  message: 'Car not found',
};

export {
  getAllCarsOutput,
  getACarByIdOutput,
  carOutput,
  carInput,
  notFoundMessage,
  invalidID,
};
