import { Test, TestingModule } from '@nestjs/testing';
import { DiscipulosService } from './discipulos.service';

describe('DiscipulosService', () => {
  let service: DiscipulosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscipulosService],
    }).compile();

    service = module.get<DiscipulosService>(DiscipulosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
