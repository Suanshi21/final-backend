/* eslint-disable prettier/prettier */

// Import necessary modules and services
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task, TaskSchema } from './task.schema';

@Module({
  // Import the Task schema for use with Mongoose
  imports: [MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }])],
  
  // Register the controller and provider
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
