import { Module } from '@nestjs/common';
import { SlotsService } from './slots.service';
import { SlotsController } from './slots.controller';
import { Slot, SlotSchema } from '../../db/entities/slot.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { Space, SpaceSchema } from '../../db/entities/space.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Slot.name, schema: SlotSchema },
      { name: Space.name, schema: SpaceSchema },
    ]),
  ],
  controllers: [SlotsController],
  providers: [SlotsService],
})
export class SlotsModule {}
