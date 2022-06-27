import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { UserDto } from 'src/dto/user.dto';
import { Connection } from 'mongoose';

@Injectable()
export class UserService {
    constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>) {}

    async create (createUserDto: UserDto): Promise<User> {
        return await new this.userModel({
            ...createUserDto
        }).save();
    }
}
