import { ApiProperty } from "@nestjs/swagger";

export class AddressDto {
    @ApiProperty()
    name: string;
}