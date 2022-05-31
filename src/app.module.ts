import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
require('dotenv').config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODBURL, { dbName: 'nest' }),
            ConfigModule.forRoot({ envFilePath: '../../.env' }),
            UserModule, AddressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
