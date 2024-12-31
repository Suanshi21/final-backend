/* eslint-disable prettier/prettier */

// Import necessary modules and services
import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Handle user signup
  @Post('signup')
  async signup(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.usersService.signup(username, password);
  }

  // Handle user login
  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.usersService.login(username, password);
  }
}
