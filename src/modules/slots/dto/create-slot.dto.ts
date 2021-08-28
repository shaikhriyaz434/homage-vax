import { ApiProperty } from '@nestjs/swagger';
import { Space } from '../../../db/entities/space.entity';
import { Duration } from '../../../db/models/duration';

export class CreateSlotDto {
  @ApiProperty({ type: 'string', description: 'Person id' })
  person: string;
  @ApiProperty({ type: 'string', description: 'status' })
  status: string;
  @ApiProperty({ type: 'string', description: 'duration' })
  space: string;
  @ApiProperty({ type: 'string', description: 'clinic id' })
  clinic: any;

  @ApiProperty({
    type: 'string',
    description: 'Date of slot booked DD/MM/YYYY',
  })
  slotDate: string;
}
