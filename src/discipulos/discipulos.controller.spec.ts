import { Test, TestingModule } from '@nestjs/testing';
import { DiscipulosController } from './discipulos.controller';

describe('Discipulos Controller', () => {
  let controller: DiscipulosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscipulosController],
    }).compile();

    controller = module.get<DiscipulosController>(DiscipulosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
