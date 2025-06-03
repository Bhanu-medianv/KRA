import { Test, TestingModule } from '@nestjs/testing';
import { JwtauthguardGateway } from '../jwtauthguard.gateway';

describe('JwtauthguardGateway', () => {
  let gateway: JwtauthguardGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtauthguardGateway],
    }).compile();

    gateway = module.get<JwtauthguardGateway>(JwtauthguardGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
