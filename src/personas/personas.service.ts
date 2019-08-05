import { Injectable } from '@nestjs/common';
import { Persona } from './interfaces/personas.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePersonaDTO } from './dto/persona.dto';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';

@Injectable()
export class PersonasService {
    constructor(@InjectModel('Persona') private personaModel: Model<Persona>) {

    }

    async createPersona(personaDto: CreatePersonaDTO) {
        const persona = new this.personaModel(personaDto);
        return await persona.save();
    }

    async getPersonas(): Promise<Persona[]> {
        const data = await this.personaModel.find().exec();
        return data;
    }

    async getPersona(id): Promise<Persona> {
        return await this.personaModel.findOne({_id: id});
    }

    async delete(id): Promise<any>{
        id = new mongoose.Types.ObjectId(id);
        return await this.personaModel.findOneAndDelete({_id: id});
    }
}
