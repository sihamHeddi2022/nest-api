import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('patient-controller')
export class PatientControllerController {
    @Get()
    findAll():string{
        return "hi there"
    }
    @Get(":id")
    findOne(@Param("id") id:string):string {
        return ` hi there  find - ${id}`
    }
    
    @Post()
    create(@Body("item") item:string):string{
        return ` hi there - ${item}`
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
