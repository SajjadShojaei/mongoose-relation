import { ApiProperty } from "@nestjs/swagger";
import { Address } from "src/schemas/address.schema";

export class UserDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    address: string;
}