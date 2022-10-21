import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './usr-dtls/roles.guard';
import { UsrDtlsModule } from './usr-dtls/usr-dtls.module';

@Module({
  imports: [UsrDtlsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {}
