import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from '../models/base';
import { Duration } from '../models/duration';
import { Clinic } from './clinic.entity';
import { Person } from './person.entity';
import { Document } from 'mongoose';

@Schema()
export class Slot extends BaseEntity {
  @Prop()
  status: string;
  @Prop()
  duration: Duration;
  @Prop({ type: 'String', ref: 'Clinic' })
  clinic: Clinic;
  @Prop({ type: 'String', ref: 'Person' })
  person: Person;
}

export type SlotDocument = Slot & Document;

export const SlotSchema = SchemaFactory.createForClass(Slot);
