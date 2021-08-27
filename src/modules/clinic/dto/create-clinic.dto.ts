import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../../db/models/address';
import { OperatingHours } from '../../../db/models/operating-hours';

export class CreateClinicDto {
  @ApiProperty({ type: 'string', description: 'Name of the clinic' })
  name: string;
  @ApiProperty({ type: 'string', description: 'City of the clinic' })
  city: string;
  @ApiProperty({ type: 'string', description: 'Pincode of the clinic' })
  pincode: string;
  @ApiProperty({ type: () => Address, description: 'Address of the clinic' })
  address: Address;
  @ApiProperty({ type: 'string', description: 'Contact of the clinic' })
  contact: string;
  @ApiProperty({
    type: () => OperatingHours,
    description: 'Operating hours of the clinic',
  })
  operatingHours: OperatingHours;
}
