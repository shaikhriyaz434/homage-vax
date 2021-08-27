import { Injectable } from '@nestjs/common';
import { Leave, LeaveDocument } from '../../db/entities/leave.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Injectable()
export class LeaveService {
  constructor(
    @InjectModel(Leave.name)
    private readonly model: Model<LeaveDocument>,
  ) {}
  async create(input: CreateLeaveDto) {
    const newDoc = new this.model(input);
    return newDoc.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, input: UpdateLeaveDto) {
    return this.model.findByIdAndUpdate(id, input).exec();
  }

  remove(id: string) {
    return this.model.remove({ id }).exec();
  }
}
