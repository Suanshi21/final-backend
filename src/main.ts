/* eslint-disable prettier/prettier */

// Import necessary modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the NestJS application instance
  const app = await NestFactory.create(AppModule);

  app.enableCors();  // Enable Cross-Origin Resource Sharing (CORS)

  // Start the server and listen on port 3000
  await app.listen(3000);
  console.log('Backend running on http://localhost:3000');
}

// Initialize the application
bootstrap();
