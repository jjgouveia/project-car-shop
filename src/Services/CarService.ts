import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);

    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const request = carODM.find();
    const result = (await request).map((car) => this.createCarDomain(car));

    return result;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const request = carODM.findById(id);
    const result = this.createCarDomain(await request);

    return result;
  }

  public async update(id: string, newInfo: ICar) {
    const carODM = new CarODM();

    const update = await carODM.update(id, newInfo);

    return this.createCarDomain(update);
  }

  public async destroy(id: string) {
    const carODM = new CarODM();
    return carODM.delete(id);
  }
}