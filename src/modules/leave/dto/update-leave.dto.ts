import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Duration } from '../../../db/models/duration';
import { CreateLeaveDto } from './create-leave.dto';

export class UpdateLeaveDto extends PartialType(CreateLeaveDto) {
  @ApiPropertyOptional({ type: 'string', description: 'remark' })
  remark?: string;
  @ApiPropertyOptional({ type: 'string', description: 'staff id' })
  staff?: any;
  @ApiPropertyOptional({ type: 'string', description: 'status' })
  status?: string;
  @ApiPropertyOptional({
    type: 'string',
    description: 'Date  DD/MM/YYYY',
  })
  leaveDate?: string;
  @ApiPropertyOptional({ type: 'string', description: 'clinic id' })
  clinic?: any;
}
