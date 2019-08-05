import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';
import { DiscipulosModule } from './discipulos/discipulos.module';
import { PersonasModule } from './personas/personas.module';


@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/customer', { useNewUrlParser: true }),
    MessagesModule,
    DiscipulosModule,
    PersonasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
