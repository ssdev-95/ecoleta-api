import { Injectable } from '@nestjs/common';

import {
	FirebaseApp, initializeApp
} from 'firebase/app';

import {
	ref,
	StorageReference as Ref,
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

import { firebaseConfig } from './config';

@Injectable()
export class FirebaseService {
	private firebase:FirebaseApp|undefined
	private storage:FirebaseStorage|undefined

	constructor() {
		this.firebase = initializeApp(firebaseConfig)
		this.storage = getStorage(this.firebase!)
		console.info('[FIREBASE] ',  firebaseConfig)
		console.info('[FIREBASE] Storage initialized')
	}

	async upload(collectorImage:CollectorImage) {
		try {
			const name = `${Date.now()}-${collectorImage.name}`

			const { ref: imageRef } = await this
			  .uploadWithString(
  			  ref(this.storage!, name),
  				collectorImage.image,
  				collectorImage.type
  			)

			console.log(imageRef)
			return getDownloadURL(imageRef)
		} catch(err) {
			console.log(err)
			throw err
		}
	}

	uploadWithBlob(ref: Ref, image:Blob) {
		return uploadBytes(ref,image)
	}

	uploadWithString(ref:Ref, image:string, type:string) {
		return uploadString(
			ref, image, type as StringFormat
		)
	}
}
