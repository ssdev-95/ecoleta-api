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
		const { name:imageName, image, type:imageType } = body

		const imageInstance = new CollectorImage({
			image,
			type: imageType,
			name: imageName
		})

		return await this.imageUploader.upload(imageInstance)
	}
}
