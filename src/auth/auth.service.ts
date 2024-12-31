/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Import necessary modules and services
import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

/**
 * AuthService provides methods for user authentication and JWT management.
 */
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService, // Service for managing user data
    private readonly jwtService: JwtService, // Service for handling JWT operations
  ) {}

  /**
   * Validates the user's credentials.
   * @param username - The username provided by the client.
   * @param password - The password provided by the client.
   * @returns User data excluding the password if credentials are valid; otherwise, null.
   */
  async validateUser(username: string, password: string): Promise<any> {
    // Retrieve the user by username from the UsersService
    const user = await this.usersService.findOne(username);

    // Compare the provided password with the hashed password stored in the database
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user.toObject(); // Exclude the password from the returned user object
      return result;
    }

    // Return null if the credentials are invalid
    return null;
  }

  /**
   * Generates a JWT for the authenticated user.
   * @param user - The authenticated user's data.
   * @returns An object containing the signed JWT.
   */
  async generateJwt(user: any): Promise<{ token: string }> {
    // Create the payload for the JWT with user details
    const payload = { username: user.username, userId: user._id };

    // Sign and return the JWT
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
