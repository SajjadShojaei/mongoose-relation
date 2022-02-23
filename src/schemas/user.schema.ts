import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Address } from "./address.schema";


export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    name: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref:Address.name }] })
    address: Address[];
}

export const UserSchema = SchemaFactory.createForClass(User);