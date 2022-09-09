import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PatientControllerController } from './patient-controller.controller';
import { PatientSchema } from './schema/patient.schema';
import { PatientService } from './services/patient.service';

@Module({
  imports: [MongooseModule.forFeature([{name:"Patient",schema:PatientSchema}])],
  controllers: [PatientControllerController],
  providers: [PatientService],
})
export class PatientModule {}
