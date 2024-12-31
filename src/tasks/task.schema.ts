/* eslint-disable prettier/prettier */

// Import necessary modules from NestJS and Mongoose
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Task extends Document {
  @Prop()
  title: string;

  @Prop()
  description: string;

  // Reference to the User entity via userId
  @Prop({ type: String, ref: 'User' })
  userId: string; 
}

// Create the Mongoose schema for the Task class
export const TaskSchema = SchemaFactory.createForClass(Task);
