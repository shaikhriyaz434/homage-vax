import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from 'src/db/entities/staff.entity';
import { Repository } from 'typeorm';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';

@Injectable()
export class StaffService {
  constructor(
    @InjectRepository(Staff)
    private readonly repo: Repository<Staff>,
  ) {}
  async create(input: CreateStaffDto) {
    const result = await this.repo.save(input);
    return result;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, input: UpdateStaffDto) {
    this.repo.update({ _id: id }, input);
    return;
  }

  remove(id: string) {
    return this.repo.delete({ _id: id });
  }
}
