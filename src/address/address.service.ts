import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address, AddressDocument } from 'src/schemas/address.schema';
import { AddressDto } from 'src/dto/address.dto';


@Injectable()
export class AddressService {
    constructor(
        @InjectModel(Address.name) private readonly addModel: Model<AddressDocument>,
    ){}
    
    async createAdd (createAddDto: AddressDto): Promise<Address> {
        return await new this.addModel({
            ...createAddDto
        }).save();
    }
}
