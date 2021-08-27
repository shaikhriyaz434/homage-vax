import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Slot, SlotDocument } from '../../db/entities/slot.entity';
import { Repository } from 'typeorm';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SlotsService {
  constructor(
    @InjectModel(Slot.name)
    private readonly model: Model<SlotDocument>,
  ) {}
  async create(input: CreateSlotDto) {
    const newDoc = new this.model(input);
    return newDoc.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, input: UpdateSlotDto) {
    // return this.model.findByIdAndUpdate(id, input).exec();
  }

  remove(id: string) {
    return this.model.remove({ id }).exec();
  }
}
