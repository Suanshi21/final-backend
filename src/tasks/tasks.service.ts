/* eslint-disable prettier/prettier */

// Import necessary modules and services
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  // Create a task for a specific user
  async create(createTaskDto: CreateTaskDto, userId: string): Promise<Task> {
    const createdTask = new this.taskModel({
      ...createTaskDto,
      userId, // Assign the userId from the JWT token
    });
    return createdTask.save();
  }

  // Find all tasks for the logged-in user
  async findAll(userId: string): Promise<Task[]> {
    return this.taskModel.find({ userId }).exec(); // Filter tasks by userId
  }

  // Find a task by its ID
  async findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  // Update a task by its ID
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateTaskDto, { new: true }).exec();
  }

  // Remove a task by its ID
  async remove(id: string): Promise<Task> {
    return this.taskModel.findByIdAndDelete(id).exec();
  }
}
