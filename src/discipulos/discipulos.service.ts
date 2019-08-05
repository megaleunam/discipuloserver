import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Discipulo } from './interfaces/discipulo.interface';
import { CreateDiscipuloDTO } from './dto/discipulo.dto';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

@Injectable()
export class DiscipulosService {
    constructor(@InjectModel('Discipulo') private discipuloModel: Model<Discipulo>) {

    }

    async createDiscipulo(discipulodto: CreateDiscipuloDTO) {
        const discipulo = new this.discipuloModel(discipulodto);
        return await discipulo.save();
    }

    async getDiscipulos(): Promise<Discipulo[]> {
        const data = await this.discipuloModel.find().populate('personas');
        return data;
    }

    async getDiscipulo(id): Promise<Discipulo> {
        const _id = new mongoose.Types.ObjectId(id);
        return await this.discipuloModel.findOne({_id: _id});
    }

    async delete(id): Promise<any> {
        const _id = new mongoose.Types.ObjectId(id);
        return await this.discipuloModel.findOneAndDelete({_id: _id});
    }
}
