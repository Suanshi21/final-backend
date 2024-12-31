/* eslint-disable prettier/prettier */
// Import necessary modules and services
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module'; 
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy'; 

/**
 * AuthModule handles all authentication-related services and configuration.
 */
@Module({
  imports: [
    // Import UsersModule to manage user-related data and interactions
    UsersModule, 

    // Configure JWT Module with a secret key and token expiration settings
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY, // The secret key for signing JWTs (loaded from environment variables)
      signOptions: { expiresIn: '1h' },  // Token expiration time set to 1 hour
    }),
  ],
  providers: [
    AuthService, // Service responsible for authentication logic
    JwtStrategy, // Strategy for validating and handling JWTs
  ],
  exports: [
    AuthService, // Export AuthService to make it available in other modules
  ],
})
export class AuthModule {}
