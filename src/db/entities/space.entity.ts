import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseEntity } from '../models/base';

@Schema()
export class Space extends BaseEntity {
  @Prop({ type: 'String' })
  start: string;

  @Prop({ type: 'String' })
  end: string;

  @Prop({ type: 'Number' })
  capacity: number;
}
export type SpaceDocument = Space & Document;
export const SpaceSchema = SchemaFactory.createForClass(Space);
