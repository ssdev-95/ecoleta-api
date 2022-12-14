import {
	CollectorPointRegister
} from './registrate-collector-point';

import {
	InMemmoryCollectorPointsRepository
} from '../../../test/repositories/in-memory-collector-points-repository';

describe('Register Collector Point', () => {
	const collectorPointsRepository = new InMemmoryCollectorPointsRepository()

	it('should be able to register a collector point', async () => {
		const collectorPointRegister = new CollectorPointRegister(
			collectorPointsRepository
		)
	
		const { collectorPoint } = await collectorPointRegister
		  .register({
				name: 'Salompas',
				whatsapp: 19393818999,
				email: 'jwjefidjwkqw9ss',
				picture: 'hwf7wh2id8fdn',
				street: 8,
				city: '2f7dhws',
				uf: 'MA',
				coords: 'nsu2nt8fidje'
			})

		expect(
			collectorPointsRepository.collectors
		).toHaveLength(1)

		expect(
			collectorPointsRepository.collectors[0]
		).toEqual(collectorPoint)
	})
})
