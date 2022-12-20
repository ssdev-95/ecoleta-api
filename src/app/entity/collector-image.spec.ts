import { CollectorImage } from './collector-image';

describe('Collector Image', () => {
	it('should create an Collector Image', () => {
		const collectorImage = new CollectorImage({
			name: 'lol',
			image: 'salame.svg'
		})

		expect(collectorImage).toBeTruthy()
	})

	it('should not be able to create a Collector Image', () => {
		expect(
			() => new CollectorImage()
		).toThrow()
	})
})
