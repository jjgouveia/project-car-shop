import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;
  
  constructor({ 
    id,
    model,
    year,
    color,
    status,
    buyValue,
    category,
    engineCapacity }: IMotorcycle) {
    super(id, model, year, color, status, buyValue);
  
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
  
  public getCategory() {
    return this.category;
  }
  public setgetCategory(value: 'Street' | 'Custom' | 'Trail') {
    this.category = value;
  }
  public getEngineCapacity() {
    return this.engineCapacity;
  }
  public setEngineCapacity(value: number) {
    this.engineCapacity = value;
  }
}