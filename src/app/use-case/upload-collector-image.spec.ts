import { UploadImage } from './upload-collector-image';

import {
	makeCollectorImage
} from "@test/factories/collector-image-factory";

import {
	InMemmoryFirebaseRepository
} from '@test/repositories/in-memmory-firebase-repository';

import {
	CollectorImage
} from "@application/entity/collector-image";

describe('something really cool', () => {
	it('should do something really cool', async () => {
		const firebaseRepository = new InMemmoryFirebaseRepository()
		const uploadImage = new UploadImage(firebaseRepository)

		const result = await uploadImage.upload(
			new CollectorImage(makeCollectorImage())
		)

		expect(result).toBeTruthy()
	})
})
