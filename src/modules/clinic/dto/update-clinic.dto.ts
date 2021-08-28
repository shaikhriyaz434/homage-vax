import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Address } from '../../../db/models/address';
import { OperatingHours } from '../../../db/models/operating-hours';

export class UpdateClinicDto {
  @ApiPropertyOptional({ type: 'string', description: 'Name of the clinic' })
  name?: string;
  @ApiPropertyOptional({ type: 'string', description: 'City of the clinic' })
  city?: string;
  @ApiPropertyOptional({ type: 'string', description: 'Pincode of the clinic' })
  pincode?: string;
  @ApiPropertyOptional({
    type: () => Address,
    description: 'Address of the clinic',
  })
  address?: Address;
  @ApiPropertyOptional({ type: 'string', description: 'Contact of the clinic' })
  contact?: string;
  @ApiPropertyOptional({
    type: () => OperatingHours,
    description: 'Operating hours of the clinic',
  })
  operatingHours?: OperatingHours;

  @ApiPropertyOptional({ type: 'number', description: 'number doses avalable' })
  capacity?: number;
}
