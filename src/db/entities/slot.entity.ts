import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../models/base';
import { Duration } from '../models/duration';
import { Clinic } from './clinic.entity';
import { Person } from './person.entity';

@Entity()
export class Slot extends BaseEntity {
  @Column({ type: 'varchar', length: 50 })
  status: string;

  @Column({ type: 'json', nullable: true })
  duration: Duration;

  @Column({ type: 'string', name: 'clinic_id', nullable: true })
  clinicId: string;

  @Column({ type: 'string', name: 'person_id', nullable: true })
  personId: string;

  @ManyToOne((type) => Clinic, (clinic) => clinic.slots)
  @JoinColumn({ name: 'clinic_id' })
  clinic: Clinic;

  @ManyToOne((type) => Person, (person) => person.slots)
  @JoinColumn({ name: 'person_id' })
  person: Person;
}
