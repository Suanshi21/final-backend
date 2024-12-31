/* eslint-disable prettier/prettier */

// Import necessary modules from NestJS and Mongoose
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the User schema
@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true }) // Username is required and unique
  username: string;

  @Prop({ required: true }) // Password is required
  password: string;
}

// Create the Mongoose schema for the User class
export const UserSchema = SchemaFactory.createForClass(User);
