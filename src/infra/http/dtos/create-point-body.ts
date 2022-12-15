import {
	IsNotEmpty,
	IsEmail,
	IsNumber
} from 'class-validator';

export class CreateCollectorPointBody {
	@IsNotEmpty()
	name: string

	@IsNotEmpty()
	@IsEmail()
	email: string

	@IsNotEmpty()
	@IsNumber()
	whatsapp: number

	@IsNotEmpty()
	@IsNumber()
	street: number
	
	@IsNotEmpty()
	city: string

	@IsNotEmpty()
	uf: string

	@IsNotEmpty()
	coords: string

	@IsNotEmpty()
	picture: string
}
