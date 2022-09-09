import { Test, TestingModule } from '@nestjs/testing';
import { PatientControllerController } from './patient-controller.controller';

describe('PatientControllerController', () => {
  let controller: PatientControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientControllerController],
    }).compile();

    controller = module.get<PatientControllerController>(PatientControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
