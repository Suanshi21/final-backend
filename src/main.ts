/* eslint-disable prettier/prettier */

// Import necessary modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Create the NestJS application instance
  const app = await NestFactory.create(AppModule);

  app.enableCors();  // Enable Cross-Origin Resource Sharing (CORS)

  const port = process.env.PORT || 3000;

  // Start the server and listen on the dynamic port
  await app.listen(port);
  console.log(`Backend running on http://localhost:${port}`);
}

// Initialize the application
bootstrap();
