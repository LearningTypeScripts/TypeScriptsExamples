import { Module } from '@nestjs/common';
import { UsrDtlsService } from './usr-dtls.service';
import { UsrDtlsController } from './usr-dtls.controller';

@Module({
  controllers: [UsrDtlsController],
  providers: [UsrDtlsService],
  exports: [UsrDtlsService]
})
export class UsrDtlsModule {}
