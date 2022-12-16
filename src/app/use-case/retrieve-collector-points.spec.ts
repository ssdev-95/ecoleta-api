import {
	makeCollectorPoint
} from '@test/factories/collector-point-factory';

import {
	InMemmoryCollectorPointsRepository
} from '@test/repositories/in-memory-collector-points-repository';

import {
	CollectorPointRegister
} from './registrate-collector-point';

import {
	CollectorPointRetriever
} from './retrieve-collector-points';

describe('Collector Points Retriever', () => {
	it('should be able to get a collector point by city', async () => {
		 const repository = new InMemmoryCollectorPointsRepository()
		const register = new CollectorPointRegister(repository!)
		const retriever = new CollectorPointRetriever(repository)

		await register.register(makeCollectorPoint({
			city: 'Nimbasa'
		}))

		const rawResponse = await retriever
		  .findManyByCity('Nimbasa')
	
		expect(rawResponse).toHaveLength(1)
	})
})
