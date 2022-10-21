import { Test, TestingModule } from '@nestjs/testing';
import { UsrDtlsController } from './usr-dtls.controller';
import { UsrDtlsService } from './usr-dtls.service';

describe('UsrDtlsController', () => {
  let controller: UsrDtlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsrDtlsController],
      providers: [UsrDtlsService],
    }).compile();

    controller = module.get<UsrDtlsController>(UsrDtlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
