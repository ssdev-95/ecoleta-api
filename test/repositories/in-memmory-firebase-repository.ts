import {
	CollectorImage
} from '@application/entity/collector-image';

import {
	CollectorImageRespository
} from '@application/repositories/collector-image-repository';

export class InMemmoryFirebaseRepository
  extends CollectorImageRespository {
	async upload(collectorImage:CollectorImage) {
		return collectorImage.toString()
	}
}
