import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { TronModule } from './tron/tron.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), UserModule, AddressModule, TronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
