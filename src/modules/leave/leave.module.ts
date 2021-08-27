import { Module } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { LeaveController } from './leave.controller';
import { Leave, LeaveSchema } from '../../db/entities/leave.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Leave.name, schema: LeaveSchema }]),
  ],
  controllers: [LeaveController],
  providers: [LeaveService],
})
export class LeaveModule {}
