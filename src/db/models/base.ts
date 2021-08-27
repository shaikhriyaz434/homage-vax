import {
  Column,
  CreateDateColumn,
  Generated,
  ObjectID,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class BaseEntity {
  @Generated('uuid')
  @PrimaryGeneratedColumn('uuid', { name: '_id' })
  _id: string;

  @CreateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
