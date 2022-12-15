import {
	CollectorPointRegister
} from './registrate-collector-point';

import {
	InMemmoryCollectorPointsRepository
} from '@test/repositories/in-memory-collector-points-repository';

import {
	makeCollectorPoint
} from '@test/factories/collector-point-factory';

describe('Register Collector Point', () => {
	const collectorPointsRepository = new InMemmoryCollectorPointsRepository()

	it('should be able to register a collector point', async () => {
		const collectorPointRegister = new CollectorPointRegister(
			collectorPointsRepository
		)
	
		const { collectorPoint } = await collectorPointRegister
		  .register(makeCollectorPoint())

		expect(
			collectorPointsRepository.collectors
		).toHaveLength(1)

		expect(
			collectorPointsRepository.collectors[0]
		).toEqual(collectorPoint)
	})
})
