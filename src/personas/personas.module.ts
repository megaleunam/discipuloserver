import { Module } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { PersonasController } from './personas.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema } from './schemas/personas.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Persona', schema: PersonaSchema}])
    ],
    providers: [PersonasService],
    controllers: [PersonasController]
})
export class PersonasModule {}
