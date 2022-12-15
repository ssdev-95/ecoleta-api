import {
	CollectorPointsRepository
} from '@application/repositories/collector-points-repository';

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
	let repository: CollectorPointsRepository|undefined

	beforeAll(async () => {
		repository = new InMemmoryCollectorPointsRepository()
		const register = new CollectorPointRegister(repository!)

		await register.register(makeCollectorPoint())
	})

	it('should be able to get all collector points', async () => {
		const retriever = new CollectorPointRetriever(repository!)

		const rawResponse = await retriever.findManyByCity('Nimbasa')
		expect(rawResponse).toHaveLength(1)
	})

	afterAll(() => {
		repository = undefined
	})
})
