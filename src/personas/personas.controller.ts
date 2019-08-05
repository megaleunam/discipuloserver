import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDTO } from './dto/persona.dto';

@Controller('personas')
export class PersonasController {
    constructor(private personasService: PersonasService){

    }
    @Post()
    async createMessage(@Body() person: CreatePersonaDTO) {
        return await this.personasService.createPersona(person);
    }

    @Get()
    async getPersonas() {
        return await this.personasService.getPersonas();
    }

    @Get(':id')
    async getPersona(@Param('id') id: string) {
        return await this.personasService.getPersona(id);
    }
    @Delete(':id')
    async deletePersona(@Param('id') id: string) {
        return await this.personasService.delete(id);
    }
}
