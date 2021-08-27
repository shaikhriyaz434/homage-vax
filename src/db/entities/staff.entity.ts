import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Address } from '../models/address';
import { BaseEntity } from '../models/base';
import { Clinic } from './clinic.entity';
import { Leave } from './leave.entity';
import { Person } from './person.entity';

@Entity()
export class Staff extends Person {
  @Column({ type: 'string', name: 'clinic_id', nullable: true })
  clinicId: string;

  @OneToMany((type) => Leave, (leave) => leave.staff)
  leaves: Leave[];

  @ManyToOne((type) => Clinic, (clinic) => clinic.staffs)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic | null;
}
