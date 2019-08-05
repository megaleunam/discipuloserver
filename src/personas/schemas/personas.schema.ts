import * as mongoose from 'mongoose';

export const PersonaSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    fechaNacimiento: Date,
    email: String,
});
