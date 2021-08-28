import { Prop, Schema } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
@Schema()
export abstract class BaseEntity {
  @Prop({ required: true, default: () => uuidv4() })
  _id: string;

  @Prop({ default: () => new Date() })
  created_at: Date;

  @Prop({ default: () => new Date() })
  updated_at: Date;
}
