/* eslint-disable prettier/prettier */

// Import necessary modules and classes
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * JwtStrategy handles the validation of JSON Web Tokens (JWTs).
 * It extends the PassportStrategy class and uses the 'jwt' strategy.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // Configure the JWT strategy
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract the JWT from the Authorization header
      ignoreExpiration: false, // Ensure tokens are not used if expired
      secretOrKey: process.env.JWT_SECRET_KEY, // Use the secret key for verifying the token's signature
    });
  }

  /**
   * Validates the payload of a decoded JWT.
   * @param payload - The decoded JWT payload.
   * @returns An object containing the userId and username from the payload.
   */
  async validate(payload: any) {
    // Return user information extracted from the JWT payload
    return { userId: payload.userId, username: payload.username };
  }
}
