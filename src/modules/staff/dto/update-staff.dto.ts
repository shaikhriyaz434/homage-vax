import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Address } from '../../../db/models/address';
import { CreateStaffDto } from './create-staff.dto';

export class UpdateStaffDto {
  @ApiPropertyOptional({ type: 'string', description: 'name' })
  name?: string;

  @ApiPropertyOptional({ type: 'string', description: 'city' })
  city?: string;

  @ApiPropertyOptional({ type: 'string', description: 'princode' })
  pincode?: string;

  @ApiPropertyOptional({ type: () => Address, description: 'Address' })
  address?: Address;

  @ApiPropertyOptional({
    type: 'string',
    description: 'contact number with extension',
  })
  contact?: string;

  @ApiPropertyOptional({ type: 'string', description: 'clinic id' })
  clinicId?: string;
}
