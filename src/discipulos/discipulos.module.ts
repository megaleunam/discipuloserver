import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DiscipuloSchema } from './schemas/discipulo.schema';
import { DiscipulosService } from './discipulos.service';
import { DiscipulosController } from './discipulos.controller';
import { PersonaSchema } from 'src/personas/schemas/personas.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: 'Discipulo', schema: DiscipuloSchema},
            {name: 'Persona', schema: PersonaSchema},
        ]),
    ],
    providers: [DiscipulosService],
    controllers: [DiscipulosController],
})
export class DiscipulosModule {}
