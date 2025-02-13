import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PaymentsModule } from './payments/payments.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(process.env.TC_MONGODB_URI!),
    UsersModule,
    AuthModule,
    PaymentsModule,
    JwtModule.register({
      global: true,
      secret: process.env.TC_JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    PaymentsModule,
    AiModule,
  ],
})
export class AppModule {}
