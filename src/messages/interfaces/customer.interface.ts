import { Document } from 'mongoose';

export interface Customer extends Document {
     name: string;
     apellido: string;
}