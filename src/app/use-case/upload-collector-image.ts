import {
	CollectorImage
} from '@application/entity/collector-image';

import {
	CollectorImageRespository
} from '@application/repositories/collector-image-repository';

export class UploadImage {
	constructor(private imageRepository: CollectorImageRespository) {}

	async upload(collectorImage:CollectorImage) {
		return await this.imageRepository.upload(collectorImage)
	}
}
