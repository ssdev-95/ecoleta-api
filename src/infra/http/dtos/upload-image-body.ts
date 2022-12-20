import { IsNotEmpty } from 'class-validator';

export class UploadImageBody {
	@IsNotEmpty()
	name: string

	@IsNotEmpty()
	image: string
}
