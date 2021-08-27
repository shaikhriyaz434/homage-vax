import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Duration } from '../../../db/models/duration';
import { CreateSlotDto } from './create-slot.dto';

export class UpdateSlotDto {
  @ApiPropertyOptional({ type: 'string', description: 'Person id' })
  personId?: string;
  @ApiPropertyOptional({ type: 'string', description: 'status' })
  status?: string;
  @ApiPropertyOptional({ type: () => Duration, description: 'duration' })
  duration?: Duration;
  @ApiPropertyOptional({ type: 'string', description: 'clinic id' })
  clinicId?: string;
}
