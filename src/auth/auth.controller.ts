/* eslint-disable prettier/prettier */
// Import necessary modules and services
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';

// Define the controller for authentication-related endpoints
@Controller('auth')
export class AuthController {
  // Inject the AuthService to handle authentication logic
  constructor(private readonly authService: AuthService) {}

  /**
   * Handles login requests.
   * @param username - The username provided in the request body.
   * @param password - The password provided in the request body.
   * @returns A JWT token if the credentials are valid.
   * @throws UnauthorizedException if the credentials are invalid.
   */
  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    // Validate the user's credentials using the AuthService
    const user = await this.authService.validateUser(username, password);

    // If validation fails, throw an UnauthorizedException
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // If validation is successful, generate and return a JWT
    return this.authService.generateJwt(user); 
  }
}
