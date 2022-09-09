import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from '../interfaces/patient.interface';

export class PatientService {
    constructor (@InjectModel("Patient") private readonly patientModel:Model<Patient>){}

 
    async findAll():Promise<Patient[]>{
        return await this.patientModel.find({})
    }

    async findOne(id: string): Promise<Patient> {
        return await this.patientModel.findOne({ _id: id });
      }
    
   
    async create(patient:Patient):Promise<Patient>{
        const p = new this.patientModel(patient)
        return await p.save()
    }

    async update(id:string,patient:Patient):Promise<Patient>{
        return await this.patientModel.findByIdAndUpdate(id,patient)
    }

 
    async delete(id:string,patient:Patient):Promise<Patient>{
        return await this.patientModel.findByIdAndRemove(id)
    }

}
