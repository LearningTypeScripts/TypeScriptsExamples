import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { SessionSerilaizer } from './auth.session.serializer';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule.register({session: true})],
  providers: [AuthService, LocalStrategy, SessionSerilaizer]
})
export class AuthModule {}
