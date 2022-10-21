import { Test, TestingModule } from '@nestjs/testing';
import { UsrDtlsService } from './usr-dtls.service';

describe('UsrDtlsService', () => {
  let service: UsrDtlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsrDtlsService],
    }).compile();

    service = module.get<UsrDtlsService>(UsrDtlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
