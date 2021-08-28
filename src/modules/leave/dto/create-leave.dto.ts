import { ApiProperty } from '@nestjs/swagger';
import { Duration } from '../../../db/models/duration';

export class CreateLeaveDto {
  @ApiProperty({ type: 'string', description: 'remark' })
  remark: string;
  @ApiProperty({ type: 'string', description: 'staff id' })
  staff: string;
  @ApiProperty({ type: 'string', description: 'clinic id' })
  clinic: string;
  @ApiProperty({ type: 'string', description: 'status' })
  status: string;
  @ApiProperty({
    type: 'string',
    description: 'Date  DD/MM/YYYY',
  })
  leaveDate: string;
}
