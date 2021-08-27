import { ApiProperty } from '@nestjs/swagger';

export class Address {
  @ApiProperty({ type: 'string', description: 'Address line 1' })
  adr_l1: string;
  @ApiProperty({ type: 'string', description: 'Address line 2' })
  adr_l2?: string;
}
