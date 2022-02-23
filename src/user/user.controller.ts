import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService:UserService,
    ){}

    @Post('create')
    async createUser (@Body() createUserDto:UserDto):Promise<any> {
        return await this.userService.create(createUserDto);
    }

}
