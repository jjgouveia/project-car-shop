import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public createCar = async () => {
    const car = this.req.body;
    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error as Error);
    }
  };

  public getAllCars = async () => {
    try {
      const request = await this.service.getAll();
      return this.res.status(200).json(request);
    } catch (error) {
      this.next(error as Error);
    }
  };

  public getACarById = async () => {
    const { id } = this.req.params;
    try {
      const request = await this.service.getById(id);
      if (!request) return this.res.status(404).json({ message: 'Car not found' });
      return this.res.status(200).json(request);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
}