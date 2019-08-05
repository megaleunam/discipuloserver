import { Document } from 'mongoose';
import { Persona } from 'src/personas/interfaces/personas.interface';

export interface Discipulo extends Document {
    _id: any;
    generacion: string;
    discipulador: Discipulo['_id'];
    personas: Array<Persona['_id']>;
}