import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../../db/entities/person.entity';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly repo: Repository<Person>,
  ) {}
  async create(input: CreatePersonDto) {
    const result = await this.repo.save(input);
    return result;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: string) {
    return this.repo.findOne(id);
  }

  update(id: string, input: UpdatePersonDto) {
    this.repo.update({ _id: id }, input);
    return;
  }

  remove(id: string) {
    return this.repo.delete({ _id: id });
  }
}
