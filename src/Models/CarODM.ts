import { Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractVehicleODM from './AbstractVehicleODM';

export default class CarODM extends AbstractVehicleODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false }, //
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }
}