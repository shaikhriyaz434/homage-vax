import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Leave } from '../../db/entities/leave.entity';
import { Repository } from 'typeorm';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Injectable()
export class LeaveService {
  constructor(
    @InjectRepository(Leave)
    private readonly repo: Repository<Leave>,
  ) {}
  async create(input: CreateLeaveDto) {
    const result = await this.repo.save(input);
    return result;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, input: UpdateLeaveDto) {
    this.repo.update({ _id: id }, input);
    return;
  }

  remove(id: string) {
    return this.repo.delete({ _id: id });
  }
}
