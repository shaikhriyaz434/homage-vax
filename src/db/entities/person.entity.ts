import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Column, Entity, OneToMany } from 'typeorm';
import { Address } from '../models/address';
import { BaseEntity } from '../models/base';
import { Slot } from './slot.entity';
import { Document } from 'mongoose';

@Schema()
export class Person extends BaseEntity {
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
  @Prop({ type: [{ type: 'String', ref: 'Slot' }] })
  slots: Slot[];
}

export type PersonDocument = Person & Document;

export const PersonSchema = SchemaFactory.createForClass(Person);
