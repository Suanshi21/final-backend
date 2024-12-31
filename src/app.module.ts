/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Import necessary modules and services
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    // Global configuration module setup
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    
    // Importing other modules
    AuthModule, 
    TasksModule,
    UsersModule,

    // Mongoose database connection setup using environment variables
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const username = configService.get('DATABASE_USER');
        const password = configService.get('DATABASE_PASSWORD');
        const host = configService.get('DATABASE_HOST');
        const db = configService.get('DATABASE_NAME');

        // Construct MongoDB URI using config values
        const uri = `mongodb+srv://${username}:${password}@${host}/${db}?retryWrites=true&w=majority&appName=tasks`;
        return { uri };
      },
      inject: [ConfigService],
    }),

    // Re-import modules
    UsersModule,
    TasksModule,
    AuthModule,
  ],
})
export class AppModule {}
