/* eslint-disable prettier/prettier */

// Import necessary modules and services
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.schema'; 
import { UsersController } from './users.controller';

@Module({
  imports: [
    // Import Mongoose schema for the User entity
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UsersService], // Provide the UsersService
  controllers: [UsersController], // Register the UsersController
  exports: [UsersService], // Export UsersService for use in other modules
})
export class UsersModule {}
