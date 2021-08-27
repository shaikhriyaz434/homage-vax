import { ApiProperty } from '@nestjs/swagger';
import { Address } from '../../../db/models/address';

export class CreateStaffDto {
  @ApiProperty({ type: 'string', description: 'name' })
  name: string;

  @ApiProperty({ type: 'string', description: 'city' })
  city: string;

  @ApiProperty({ type: 'string', description: 'princode' })
  pincode: string;

  @ApiProperty({ type: () => Address, description: 'Address' })
  address: Address;

  @ApiProperty({ type: 'string', description: 'contact number with extension' })
  contact: string;

  @ApiProperty({ type: 'string', description: 'clinic id' })
  clinicId: string;
}
