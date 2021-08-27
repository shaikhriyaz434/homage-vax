import { Prop, Schema } from '@nestjs/mongoose';
import {
  Column,
  CreateDateColumn,
  Generated,
  ObjectID,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { PrimaryGeneratedColumn } from 'typeorm';
@Schema()
export abstract class BaseEntity {
  @Generated('uuid')
  @PrimaryGeneratedColumn('uuid', { name: '_id' })
  @Prop({ required: true, default: () => uuidv4() })
  _id: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Prop({ default: () => new Date() })
  created_at: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  @Prop({ default: () => new Date() })
  updated_at: Date;
}
