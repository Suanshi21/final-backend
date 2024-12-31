/* eslint-disable prettier/prettier */

// Import necessary decorators and classes
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JwtAuthGuard extends the built-in AuthGuard from @nestjs/passport
 * and uses the 'jwt' strategy to handle authentication.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
