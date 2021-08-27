import { Injectable } from '@nestjs/common';
import { Clinic, ClinicDocument } from '../../db/entities/clinic.entity';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClinicService {
  constructor(
    @InjectModel(Clinic.name)
    private readonly model: Model<ClinicDocument>,
  ) {}
  async create(createClinicDto: CreateClinicDto) {
    const newClinic = new this.model(createClinicDto);
    return newClinic.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, updateClinicDto: UpdateClinicDto) {
    return this.model.findByIdAndUpdate(id, updateClinicDto);
  }

  remove(id: string) {
    return this.model.remove({ id }).exec();
  }
}
