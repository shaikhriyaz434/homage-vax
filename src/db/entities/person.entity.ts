import { Column, Entity, OneToMany } from 'typeorm';
import { Address } from '../models/address';
import { BaseEntity } from '../models/base';
import { Slot } from './slot.entity';

@Entity()
export class Person extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  pincode: string;

  @Column({ type: 'json', nullable: true })
  address: Address;

  @Column({ type: 'varchar', length: 50, unique: true })
  contact: string;

  @OneToMany((type) => Slot, (slot) => slot.person)
  slots: Slot[];
}
