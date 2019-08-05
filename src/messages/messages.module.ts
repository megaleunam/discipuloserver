import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './message.schema';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { CustomerSchema } from './schemas/customer.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Customer', schema: CustomerSchema}])
    ],
    controllers: [MessagesController],
    providers: [MessagesService],
})
export class MessagesModule {}
