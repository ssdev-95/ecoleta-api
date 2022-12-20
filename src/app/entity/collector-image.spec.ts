import { CollectorImage } from './collector-image';
import {
	makeCollectorImage
} from '@test/factories/collector-image-factory';

describe('Collector Image', () => {
	it('should create an Collector Image', () => {
		const collectorImage = new CollectorImage(
			makeCollectorImage()
		)

		expect(collectorImage).toBeTruthy()
	})

	it('should not be able to create a Collector Image', () => {
		expect(
			() => new CollectorImage()
		).toThrow()
	})
})
