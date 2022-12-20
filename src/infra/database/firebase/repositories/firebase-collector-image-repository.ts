import {
	CollectorImage
} from '@application/entity/collector-image';

import {
	CollectorImageRespository
} from '@application/repositories/collector-image-repository';

import { FirebaseService } from '../firebase.service';

export class FirebaseCollectorImageRepository
  implements CollectorImageRespository {
	constructor(private imageUploadService:FirebaseService) {}

	upload(collectorImage: CollectorImage):Promise<string> {
		return this.imageUploadService.upload(collectorImage)
	}
}
