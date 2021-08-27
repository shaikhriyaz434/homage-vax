import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from '../../db/entities/staff.entity';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectModel(Staff.name)
    private readonly model: Model<StaffDocument>,
  ) {}
  async create(input: CreateStaffDto) {
    const newDoc = new this.model(input);
    return newDoc.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, input: UpdateStaffDto) {
    return this.model.findByIdAndUpdate(id, input).exec();
  }

  remove(id: string) {
    return this.model.remove({ id }).exec();
  }
}
