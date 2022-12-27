import {
	IsNotEmpty,
	IsEmail,
	IsNumber
} from 'class-validator';

import {UploadImageBody} from './upload-image-body';

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
	picture: UploadImageBody

	@IsNotEmpty()
	categories: string[]
}
