import { Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase.service';

import {
	CollectorImageRespository
} from '@application/repositories/collector-image-repository';

import {
	CollectorImage
} from '@application/entity/collector-image';

@Injectable()
export class FirebaseCollectorImageRepository
  implements CollectorImageRespository {
	constructor(private imageUploadService:FirebaseService) {}

	upload(collectorImage: CollectorImage):Promise<string> {
		return this.imageUploadService.upload(collectorImage)
	}
}
