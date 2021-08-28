import { ApiPropertyOptional } from '@nestjs/swagger';

export class SlotsQuery {
  @ApiPropertyOptional({ type: 'string', description: 'date' })
  date?: string;

  @ApiPropertyOptional({ type: 'string', description: 'city' })
  city?: string;

  @ApiPropertyOptional({ type: 'string', description: 'pincode' })
  pincode?: string;
}
