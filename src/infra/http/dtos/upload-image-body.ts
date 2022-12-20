import { IsNotEmpty } from 'class-validator';

export class UploadImageBody {
	@IsNotEmpty()
	image: string
	
	@IsNotEmpty()
	name: string

	@IsNotEmpty()
	type: string
}
