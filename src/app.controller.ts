/* eslint-disable prettier/prettier */

// Import necessary modules and services
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Handle the "/signin" route
  @Get("/signin")
  signinfun() {
    return "signin";
  }

  // Handle the "/tasks" route
  @Get("/tasks")
  tasksfun() {
    return "task";
  }
}
