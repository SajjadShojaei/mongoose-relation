import { Body, Controller, Post } from '@nestjs/common';
import { AddressDto } from 'src/dto/address.dto';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {

    constructor(
        private readonly addService:AddressService
    ){}

    @Post('create')
    async createAdd (@Body() createAddDto:AddressDto):Promise<any> {
        return await this.addService.createAdd(createAddDto);
    }
}
