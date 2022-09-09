import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientControllerController } from './patient-controller/patient-controller.controller';

@Module({
  imports: [],
  controllers: [AppController, PatientControllerController],
  providers: [AppService],
})
export class AppModule {}
