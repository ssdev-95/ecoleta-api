import {
	makeCollectorPoint
} from '@test/factories/collector-point-factory';

import { CollectorPoint } from './collector-point';

describe('Collector Point', () => {
	it('should be able to create a Collector Point', () => {
		const collector = new CollectorPoint(
			makeCollectorPoint()
		)

		expect(collector).toBeTruthy()
	})

	it('should not be able to create a Collector Point', () => {
		expect(
			() => new CollectorPoint()
		).toThrow()
	})
})
