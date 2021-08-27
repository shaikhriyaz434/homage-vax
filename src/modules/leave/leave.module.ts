import { Module } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { LeaveController } from './leave.controller';
import { Leave } from '../../db/entities/leave.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Leave])],
  controllers: [LeaveController],
  providers: [LeaveService]
})
export class LeaveModule {}
