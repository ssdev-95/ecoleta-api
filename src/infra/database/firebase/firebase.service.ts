import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';

import {
	ref,
	StorageReference,
	getStorage,
	uploadString,
	uploadBytes,
	getDownloadURL,
	FirebaseStorage,
	StringFormat
} from 'firebase/storage';

import {
	CollectorImage
} from '@application/entity/collector-image';

@Injectable()
export class FirebaseService {
	private storage:FirebaseStorage|undefined

	constructor() {
		initializeApp(firebaseConfig)
		this.storage = getStorage()
	}

	async upload(collectorImage:CollectorImage) {
		const name = `${Date.now()}-${collectorImage.name}`
		const imageRef = ref(this.storage!, name)

		await this.uploadWithBase64(
			imageRef,
			collectorImage.image,
			collectorImage.type
		)

		return getDownloadURL(imageRef)
	}

	uploadWithBlob(ref: StorageReference, image:Blob) {
		return uploadBytes(ref,image)
	}

	uploadWithBase64(
		ref:StorageReference,
		image:string,
		type: string
	) {
		return uploadString(ref, image, type as StringFormat)
	}
}
