import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from '../models/base';
import { Duration } from '../models/duration';
import { Clinic } from './clinic.entity';
import { Person } from './person.entity';
import { Document, Schema as mSchema } from 'mongoose';
import { Space } from './space.entity';

@Schema()
export class Slot extends BaseEntity {
  @Prop()
  status: string;

  @Prop({ type: 'String', ref: 'Clinic' })
  clinic: Clinic;
  @Prop({ type: 'String', ref: 'Person' })
  person: Person;

  @Prop({ type: 'String', ref: 'Space' })
  space: Space;

  @Prop({ type: 'string' })
  slotDate: string;
}

export type SlotDocument = Slot & Document;

export const SlotSchema = SchemaFactory.createForClass(Slot);
