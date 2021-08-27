import { Column, Entity, OneToMany } from 'typeorm';
import { Address } from '../models/address';
import { BaseEntity } from '../models/base';
import { OperatingHours } from '../models/operating-hours';
import { Slot } from './slot.entity';
import { Staff } from './staff.entity';

@Entity()
export class Clinic extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  @Column({ type: 'varchar', length: 50 })
  pincode: string;

  @Column({ type: 'json', nullable: true })
  address: Address;

  @Column({ type: 'varchar', length: 50 })
  contact: string;

  @Column({ type: 'json', nullable: true })
  operatingHours: OperatingHours;

  @OneToMany((type) => Staff, (staff) => staff.clinic)
  staffs: Staff[];

  @OneToMany((type) => Staff, (slot) => slot.clinic)
  slots: Slot[];
}
