import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinic } from '../../db/entities/clinic.entity';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import * as uuid from 'uuid';

@Injectable()
export class ClinicService {
  constructor(
    @InjectRepository(Clinic)
    private readonly repo: Repository<Clinic>,
  ) {}
  async create(createClinicDto: CreateClinicDto) {
    const result = await this.repo.save({ ...createClinicDto, _id: uuid.v4() });
    return result;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, updateClinicDto: UpdateClinicDto) {
    this.repo.update({ _id: id }, updateClinicDto);
    return;
  }

  remove(id: string) {
    return this.repo.delete({ _id: id });
  }
}
