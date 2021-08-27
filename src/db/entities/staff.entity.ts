import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Address } from '../models/address';
import { BaseEntity } from '../models/base';
import { Clinic } from './clinic.entity';
import { Leave } from './leave.entity';
import { Person } from './person.entity';
import { Document } from 'mongoose';

@Schema()
export class Staff extends Person {
  @Prop({ type: [{ type: 'String', ref: 'Leave' }] })
  leaves: Leave[];
  @Prop({ type: 'String', ref: 'Clinic' })
  clinic: Clinic;
}

export type StaffDocument = Staff & Document;

export const StaffSchema = SchemaFactory.createForClass(Staff);
