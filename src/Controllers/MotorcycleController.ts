import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public createMotorcycle = async () => {
    const motorcycle = this.req.body;
    try {
      const newMoto = await this.service.createMotorcycle(motorcycle);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error as Error);
    }
  };

  public getAllMoto = async () => {
    try {
      const request = await this.service.getAll();
      return this.res.status(200).json(request);
    } catch (error) {
      this.next(error as Error);
    }
  };

  public getAMotoById = async () => {
    const { id } = this.req.params;
    try {
      const request = await this.service.getById(id);
      if (!request) return this.res.status(404).json({ message: 'Motorcycle not found' });
      return this.res.status(200).json(request);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
}