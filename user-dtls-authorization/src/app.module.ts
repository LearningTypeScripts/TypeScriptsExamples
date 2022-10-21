import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsrDtlsModule } from './usr-dtls/usr-dtls.module';

@Module({
  imports: [UsrDtlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
