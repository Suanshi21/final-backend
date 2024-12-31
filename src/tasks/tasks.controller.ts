/* eslint-disable prettier/prettier */

// Import necessary modules and services
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser } from '../auth/current-user.decorator';

@Controller('tasks')
@UseGuards(JwtAuthGuard) // Protect all routes with the JWT Auth Guard
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // Create a task for the logged-in user
  @Post()
  create(
    @Body() createTaskDto: CreateTaskDto,
    @CurrentUser() user: any, // Access the user data from the JWT token
  ) {
    return this.tasksService.create(createTaskDto, user.userId);
  }

  // Get all tasks for the logged-in user
  @Get()
  findAll(@CurrentUser() user: any) {
    return this.tasksService.findAll(user.userId); 
  }

  // Get a task by its ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tasksService.findOne(id);
  }

  // Update a task by its ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(id, updateTaskDto);
  }

  // Remove a task by its ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(id);
  }
}
