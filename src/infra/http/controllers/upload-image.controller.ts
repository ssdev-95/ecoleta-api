import { Controller, Post, Body } from '@nestjs/common';

import {
	UploadImageBody
} from '../dtos/upload-image-body';

import {
	UploadImage
} from '@application/use-case/upload-collector-image';

import {
	CollectorImage
} from '@application/entity/collector-image';

@Controller('image')
export class UploadImageController {
	constructor(private imageUploader:UploadImage) {}

	@Post('upload')
	async uploadImage(@Body() body: UploadImageBody) {
		const image = new CollectorImage({
			name: body.name,
			image: body.image
		})

		return await this.imageUploader.upload(image)
	}
}
