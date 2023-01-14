import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(moto: IMotorcycle | null): Motorcycle | null {
    if (moto) {
      return new Motorcycle(moto);
    }
    return null;
  }

  public async createMotorcycle(moto: IMotorcycle) {
    const motorcyleODM = new MotorcycleODM();
    const newMotorcycle = await motorcyleODM.create(moto);

    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const request = motorcycleODM.find();
    const result = (await request).map((moto) => this.createMotorcycleDomain(moto));

    return result;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const request = motorcycleODM.findById(id);
    const result = this.createMotorcycleDomain(await request);

    return result;
  }
  
  public async update(id: string, newInfo: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();

    const update = await motorcycleODM.update(id, newInfo);

    return this.createMotorcycleDomain(update);
  }

  public async destroy(id: string) {
    const motorcycleODM = new MotorcycleODM();
    return motorcycleODM.delete(id);
  }
}