import { BaseEntity } from '../models/base';
import { Staff } from './staff.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Clinic } from './clinic.entity';

@Schema()
export class Leave extends BaseEntity {
  @Prop({ type: 'string' })
  remark: string;
  @Prop({ type: 'string' })
  status: string;
  @Prop({ type: 'String', ref: 'Staff' })
  staff: Staff;

  @Prop({ type: 'String', ref: 'Clinic' })
  clinic: Clinic;

  @Prop({ type: 'string' })
  leaveDate: string;
}

export type LeaveDocument = Leave & Document;
export const LeaveSchema = SchemaFactory.createForClass(Leave);
