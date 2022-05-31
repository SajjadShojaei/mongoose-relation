import { Controller, Get } from '@nestjs/common';
import { TronService } from './tron.service';

@Controller('tron')
export class TronController {
    constructor(
        private readonly tronService:TronService
    ){}

    @Get('getBalance')
    async getBalance(address:string){
        return await this.tronService.Balance(address)
    }
}
