import { Module } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { SlotsController } from './slots.controller';
import { Slot, SlotSchema } from '../../db/entities/slot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Slot.name, schema: SlotSchema }]),
  ],
  controllers: [SlotsController],
  providers: [SlotsService],
})
export class SlotsModule {}
