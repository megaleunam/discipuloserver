import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Message, contactos } from './message.interface';
import { Model } from 'mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/customer.dto';

@Injectable()
export class MessagesService {
    data = [{name: 'nombre',apellido:'apell'}];
    constructor(@InjectModel('Customer') private messageModel: Model<Customer>){

    }

    async createMessage(messageDto: CreateCustomerDTO): Promise<Customer> {
        const message = new this.messageModel(messageDto);
        return await message.save();
    }

    async getMessages(): Promise<Customer[]>{
        const data = await this.messageModel.find().exec();
        return data;
    }

    async getMessage(id): Promise<contactos>{
        return await this.messageModel.findOne({_id: id});
    }
}
