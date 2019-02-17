import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SystemModule } from './system/system.module';
import { ModuleModule } from 'modules/module.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ModuleModule,
    SystemModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
