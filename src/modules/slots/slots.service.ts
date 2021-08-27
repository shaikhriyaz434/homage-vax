import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Slot } from '../../db/entities/slot.entity';
import { Repository } from 'typeorm';
import { CreateSlotDto } from './dto/create-slot.dto';
import { UpdateSlotDto } from './dto/update-slot.dto';

@Injectable()
export class SlotsService {
  constructor(
    @InjectRepository(Slot)
    private readonly repo: Repository<Slot>,
  ) {}
  async create(input: CreateSlotDto) {
    const result = await this.repo.save(input);
    return result;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, input: UpdateSlotDto) {
    this.repo.update({ _id: id }, input);
    return;
  }

  remove(id: string) {
    return this.repo.delete({ _id: id });
  }
}
