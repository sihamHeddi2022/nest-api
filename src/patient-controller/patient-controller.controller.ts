import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreatePatientDto } from './dto/Createpatient.dto';
import { Patient } from './interfaces/patient.interface';
import { PatientService } from './services/patient.service';


@Controller('patient-controller')
export class PatientControllerController {
    constructor (private readonly patientService:PatientService){}
    @Get()
    async findAll():Promise<Patient[]>{
        return this.patientService.findAll()
    }
    @Get(":id")
    findOne(@Req() req:Request,@Res() res:Response):Response {
        console.log(res)
        return res.send("hello world ")
    }
    
    @Post()
    async create(@Body() item:CreatePatientDto):Promise<Patient>{
        return await this.patientService.create(item)
    }
    @Put(":id")
    update(@Param("id") id:string,@Body("item") item:string):string{
        return ` hi there ${id} - ${item} updated !!`
    }

    @Delete(":id")
    delete(@Param("id") id:string,@Body("item") item:string):string{
        return ` hi there ${id} - ${item} deleted !!`
    }
    
}
