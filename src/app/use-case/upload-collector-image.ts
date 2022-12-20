import { Injectable } from '@nestjs/common';

import {
	CollectorImageRespository
} from '@application/repositories/collector-image-repository';
import {
	CollectorImage
} from '@application/entity/collector-image';

@Injectable()
export class UploadImage {
	constructor(private imageRepository: CollectorImageRespository) {}

	upload(collectorImage:CollectorImage) {
		return this.imageRepository.upload(collectorImage)
	}
}
