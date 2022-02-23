import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UserDto } from 'src/dto/user.dto';
import { AddressDto } from 'src/dto/address.dto';
import { Address, AddressDocument } from 'src/schemas/address.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    ){}

    async create (createUserDto: UserDto): Promise<User> {
        return await new this.userModel({
            ...createUserDto
        }).save();
    }
}
