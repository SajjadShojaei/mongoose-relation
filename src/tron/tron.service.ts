import { Injectable } from '@nestjs/common';
import { TronWeb } from 'tronweb';

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    headers: { "TRON-PRO-API-KEY": '5308ea3b-1591-41f9-a270-9dc3b23629a2' },
    privateKey: 'bb004f90054f4e3003f7ac692e0def6b78d0a473a0b9eb3f78c092b204eb2613'
})

@Injectable()
export class TronService {

    async Balance(address:string) {
        return await tronWeb.trx.getBalance(address)
    }

}
