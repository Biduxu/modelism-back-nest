/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { TrainsModule } from './modules/trains/trains.module';

@Module({
  imports: [UsersModule, AuthModule, TrainsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
