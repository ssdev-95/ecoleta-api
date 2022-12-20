import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

import {
	ref,
	getStorage,
	uploadString
} from 'firebase/storage';

import {
	CollectorImage
} from '@application/entity/collector-image';

@Injectable()
export class FirebaseService {
	constructor() {
		initializeApp(firebaseConfig)
	}

	async upload(collectorImage:CollectorImage) {
		const storage = getStorage()
		const imageRef = ref(storage, collectorImage.name)

		const uploadResult = await uploadString(
			imageRef,
			collectorImage.image
		)
		return uploadResult.ref.toString()
	}
}
