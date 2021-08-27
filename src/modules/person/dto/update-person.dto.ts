import { ApiPropertyOptional } from '@nestjs/swagger';
import { Address } from '../../../db/models/address';

export class UpdatePersonDto {
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
}
