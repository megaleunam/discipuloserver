import { Document } from 'mongoose';

export interface Persona extends Document {
    _id: any,
    nombre: string;
    apellido: string;
    fechaNacimiento: Date;
    email: string;
}