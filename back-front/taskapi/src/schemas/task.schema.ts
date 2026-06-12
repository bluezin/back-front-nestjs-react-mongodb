import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Task {
  @Prop({ unique: true, require: true, trim: true })
  title: string;

  @Prop({ trim: true })
  description: string;

  @Prop({ default: false })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
