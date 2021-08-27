import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Duration } from '../../../db/models/duration';
import { CreateLeaveDto } from './create-leave.dto';

export class UpdateLeaveDto extends PartialType(CreateLeaveDto) {
  @ApiPropertyOptional({ type: 'string', description: 'remark' })
  remark?: string;
  @ApiPropertyOptional({ type: 'string', description: 'staff id' })
  staffId?: string;
  @ApiPropertyOptional({ type: 'string', description: 'status' })
  status?: string;
  @ApiPropertyOptional({ type: () => Duration, description: 'duration' })
  duration?: Duration;
}
