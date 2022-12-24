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
	street: string
	
	@IsNotEmpty()
	city: string

	@IsNotEmpty()
	uf: string

	@IsNotEmpty()
	coords: number[]

	@IsNotEmpty()
	picture: string

	@IsNotEmpty()
	categories: string[]
}
