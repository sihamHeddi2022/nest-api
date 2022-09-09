import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientControllerController } from './patient-controller/patient-controller.controller';
import { PatientModule } from './patient-controller/patient.module';


@Module({
  imports: [PatientModule,
    MongooseModule.forRoot('mongodb://localhost/patient_api')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
