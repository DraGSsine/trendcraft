import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
async function bootstrap() {
  const corsOptions = {
    origin: process.env.FRONTEND_URL ?? 'http://localhost:3000',
    credentials: true,
  };

  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
