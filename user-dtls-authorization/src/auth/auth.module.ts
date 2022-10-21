import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsrDtlsModule } from 'src/usr-dtls/usr-dtls.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsrDtlsModule, PassportModule, JwtModule.register({
    secret: 'secret',
    signOptions: {expiresIn: '60s'},
  })],
  providers: [AuthService, LocalStrategy,  JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
