import { Module } from '@nestjs/common';
import { ClinicService } from './clinic.service';
import { ClinicController } from './clinic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinic, ClinicSchema } from '../../db/entities/clinic.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Clinic.name, schema: ClinicSchema }]),
  ],
  controllers: [ClinicController],
  providers: [ClinicService],
})
export class ClinicModule {}
