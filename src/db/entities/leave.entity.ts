import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../models/base';
import { Staff } from './staff.entity';
import { Duration } from '../models/duration';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Leave extends BaseEntity {
  @Prop({ type: 'string' })
  remark: string;
  @Prop({ type: 'string' })
  status: string;
  @Prop({ type: 'String', ref: 'Staff' })
  staff: Staff;
  @Prop({ type: 'object' })
  duration: Duration;
}

export type LeaveDocument = Leave & Document;
export const LeaveSchema = SchemaFactory.createForClass(Leave);
