import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    Email: String,
    Nombre: String
});