/* eslint-disable prettier/prettier */

// Import necessary modules and services
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { User } from './user.schema'; 

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>, // Inject the User model
  ) {}

  // Handle user signup
  async signup(username: string, password: string): Promise<User> {
    const existingUser = await this.userModel.findOne({ username });
    if (existingUser) {
      throw new Error('Username is already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username,
      password: hashedPassword,
    });

    return await newUser.save();
  }

  // Handle user login and token generation
  async login(username: string, password: string): Promise<{ token: string }> {
    const user = await this.userModel.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid username or password');
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    return { token };
  }

  // Find user by username
  async findOne(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }
}
