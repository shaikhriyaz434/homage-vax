import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as mSchema } from 'mongoose';
import { Address } from '../models/address';
import { BaseEntity } from '../models/base';
import { v4 as uuidv4 } from 'uuid';
import { OperatingHours } from '../models/operating-hours';
import { Staff } from './staff.entity';
@Schema()
export class Clinic extends BaseEntity {
  @Prop()
  name: string;

  @Prop()
  city: string;

  @Prop()
  pincode: string;

  @Prop()
  address: Address;

  @Prop()
  contact: string;

  @Prop()
  operatingHours: OperatingHours;

  @Prop({ type: [{ type: 'String', ref: 'Staff' }] })
  staff: Staff[];
}

export type ClinicDocument = Clinic & Document;

export const ClinicSchema = SchemaFactory.createForClass(Clinic);
