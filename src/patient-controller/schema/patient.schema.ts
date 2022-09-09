import { Schema } from 'mongoose';

export const PatientSchema = new  Schema({
    first_name: String,
    last_name: String,
    age: Number,
    hopital_no: Number,
    disease_id:Number,
    sex:String,
});