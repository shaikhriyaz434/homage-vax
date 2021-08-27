import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../models/base';
import { Staff } from './staff.entity';
import { Duration } from '../models/duration';

@Entity()
export class Leave extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  remark: string;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  @Column({ type: 'string', name: 'staff_id', nullable: true })
  staffId: string;

  @ManyToOne(() => Staff, (staff) => staff.leaves)
  @JoinColumn({ name: 'staff_id' })
  staff: Staff | null;

  @Column({ type: 'json', nullable: true })
  duration: Duration;
}
