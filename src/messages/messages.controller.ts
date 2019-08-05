import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Message } from './message.interface';
import { CreateCustomerDTO } from './dto/customer.dto';

@Controller('messages')
export class MessagesController {
    constructor(private messageService: MessagesService){

    }
    @Post()
    async createMessage(@Body() message: CreateCustomerDTO){
        return await this.messageService.createMessage(message);
    }

    @Get()
    async getMessages() {
        return await this.messageService.getMessages();
    }

    @Get(':id')
    async getMessage(@Param('id') id: string) {
        return await this.messageService.getMessage(id);
    }
}
