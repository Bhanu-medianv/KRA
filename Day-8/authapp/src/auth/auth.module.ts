import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Localstrategies } from './strategies/localstrategies';
import { JwtStrategy } from './strategies/jwtstrateges';

@Module({
  imports:[PassportModule,JwtModule.register({
    secret:'abc123',
    signOptions:{expiresIn:'1d'}
  })],
  controllers: [AuthController],
  providers: [AuthService ,Localstrategies,JwtStrategy],
})
export class AuthModule {}
