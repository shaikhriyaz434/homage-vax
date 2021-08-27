import { ApiProperty } from '@nestjs/swagger';
import { Duration } from 'src/db/models/duration';

export class CreateSlotDto {
  @ApiProperty({ type: 'string', description: 'Person id' })
  personId: string;
  @ApiProperty({ type: 'string', description: 'status' })
  status: string;
  @ApiProperty({ type: () => Duration, description: 'duration' })
  duration: Duration;
  @ApiProperty({ type: 'string', description: 'clinic id' })
  clinicId: string;
}
