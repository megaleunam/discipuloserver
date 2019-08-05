import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const DiscipuloSchema = new Schema({
    generacion: String,
    discipulador: [{type: Schema.Types.ObjectId, ref: 'Discipulo'}],
    personas: [{type: Schema.Types.ObjectId, ref: 'Persona'}]
});
