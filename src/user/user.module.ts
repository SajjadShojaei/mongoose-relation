import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Connection } from 'mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'nest1'),
  MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], 'nest2')],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
