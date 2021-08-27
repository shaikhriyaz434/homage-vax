import { ApiProperty } from '@nestjs/swagger';

export class OperatingHours {
  @ApiProperty({ type: 'string', description: 'Start time in 24 hours format' })
  start: string;
  @ApiProperty({ type: 'string', description: 'End time in 24 hours format' })
  end: string;
}
