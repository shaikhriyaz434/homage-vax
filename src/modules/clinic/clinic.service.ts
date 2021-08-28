import { Injectable } from '@nestjs/common';
import { Clinic, ClinicDocument } from '../../db/entities/clinic.entity';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SlotsQuery } from './dto/slots-query.dto';

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

  findAvailableSlots(query: SlotsQuery) {
    const { city, pincode, date } = query;
    const matchQuery = {};
    if (city) matchQuery['city'] = city;
    if (pincode) matchQuery['pincode'] = pincode;
    console.log(matchQuery, query);
    return this.model
      .aggregate([
        {
          $match: matchQuery,
        },
        {
          $lookup: {
            from: 'staffs',
            as: 'staff',
            localField: '_id',
            foreignField: 'clinic',
          },
        },
        {
          $lookup: {
            from: 'leaves',
            let: { clinicId: '$_id' },
            as: 'leave',
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ['$clinic', '$$clinicId'] },
                  leaveDate: `${date}`,
                },
              },
            ],
          },
        },
        {
          $lookup: {
            from: 'spaces',
            localField: 'NA',
            foreignField: 'NA',
            as: 'spaces',
          },
        },
        {
          $lookup: {
            from: 'slots',
            let: { clinicId: '$_id' },
            as: 'bookedSlots',
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ['$clinic', '$$clinicId'] },
                  status: 'Active',
                  slotDate: `${date}`,
                },
              },
              {
                $group: {
                  _id: '$space',
                  bookings: { $sum: 1 },
                },
              },
            ],
          },
        },
        {
          $unwind: '$spaces',
        },
        {
          $project: {
            staff: 1,
            space: {
              _id: '$spaces._id',

              startTIme: '$spaces.start',
              endTime: '$spaces.end',
              capacity: {
                $multiply: [
                  '$spaces.capacity',
                  { $subtract: [{ $size: '$staff' }, { $size: '$leave' }] },
                ],
              },

              booked: {
                $reduce: {
                  input: '$bookedSlots',
                  initialValue: 0,
                  in: {
                    $add: [
                      '$$value',
                      {
                        $cond: {
                          if: { $eq: ['$$this._id', '$spaces._id'] },
                          then: '$$this.bookings',
                          else: 0,
                        },
                      },
                    ],
                  },
                },
              },
            },
            contact: 1,
            address: 1,
            city: 1,
            pincode: 1,
            name: 1,
            capacity: 1,
            leaveStaff: { $size: '$leave' },
            allStaff: { $size: '$staff' },
          },
        },
        {
          $group: {
            _id: '$_id',
            spaces: { $push: '$space' },
            bookedSlots: {
              $sum: '$space.booked',
            },
            capacity: { $first: '$capacity' },
            contact: { $first: '$contact' },
            address: { $first: '$address' },
            city: { $first: '$city' },
            name: { $first: '$name' },
            staff: { $first: '$staff' },
            allStaff: { $first: '$allStaff' },
            leaveStaff: { $first: '$leaveStaff' },
          },
        },
      ])
      .exec();
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
