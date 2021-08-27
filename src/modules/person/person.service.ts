import { Injectable } from '@nestjs/common';
import { Person, PersonDocument } from '../../db/entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name)
    private readonly model: Model<PersonDocument>,
  ) {}
  async create(input: CreatePersonDto) {
    const newDoc = new this.model(input);
    return newDoc.save();
  }

  findAll() {
    return this.model.find().exec();
  }

  findOne(id: string) {
    return this.model.findById(id).exec();
  }

  update(id: string, input: UpdatePersonDto) {
    return this.model.findByIdAndUpdate(id, input).exec();
  }

  remove(id: string) {
    return this.model.remove({ id }).exec();
  }
}
