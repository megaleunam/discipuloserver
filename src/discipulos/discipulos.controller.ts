import { Controller, Post, Get, Param, Body, Delete } from '@nestjs/common';
import { DiscipulosService } from './discipulos.service';
import { CreateDiscipuloDTO } from './dto/discipulo.dto';
import { async } from 'rxjs/internal/scheduler/async';

@Controller('discipulos')
export class DiscipulosController {
    constructor(private discipuloService: DiscipulosService){

    }
    @Post()
    async createMessage(@Body() message: CreateDiscipuloDTO){
        return await this.discipuloService.createDiscipulo(message);
    }

    @Get('/:id')
    async getMessage(@Param('id') id: string) {
        return await this.discipuloService.getDiscipulo(id);
    }

    @Get()
    async getMessages() {
        return await this.discipuloService.getDiscipulos();
    }

    @Delete('/:id')
    async deleteDiscipulo(@Param('id') id: string) {
        return await this.discipuloService.delete(id);
    }
}
