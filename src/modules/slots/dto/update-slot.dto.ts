import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Duration } from '../../../db/models/duration';
import { CreateSlotDto } from './create-slot.dto';

export class UpdateSlotDto {
  @ApiPropertyOptional({ type: 'string', description: 'Person id' })
  person?: string;
  @ApiPropertyOptional({ type: 'string', description: 'status' })
  status?: string;
  @ApiPropertyOptional({ type: 'string', description: 'time space of slot' })
  space?: string;
  @ApiPropertyOptional({ type: 'string', description: 'clinic id' })
  clinic?: any;
  @ApiPropertyOptional({
    type: 'string',
    description: 'Date of slot booked DD/MM/YYYY',
  })
  slotDate?: string;
}
