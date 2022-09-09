import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from '@nestjs/common';
import { Request,Response } from 'express';
import { CreatePatientDto } from './dto/Createpatient.dto';


@Controller('patient-controller')
export class PatientControllerController {
    @Get()
    findAll():string{
        return "hi there"
    }
    @Get(":id")
    findOne(@Req() req:Request,@Res() res:Response):Response {
        console.log(res)
        return res.send("hello world ")
    }
    
    @Post()
    create(@Body() item:CreatePatientDto):string{
        return ` hi there - ${item.first_name}`
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
