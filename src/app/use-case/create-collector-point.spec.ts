import {
	CreateCollectorPoint
} from './create-collector-point';

describe('Create Collector Point', () => {
	const collectors:any[] = []
	it('should be able to create a collector point', async () => {
		const createCollectorPoint = new CreateCollectorPoint()
		const collector = await createCollectorPoint.execute({
		  name: 'Salompas',
			whatsapp: 19393818999,
			email: 'jwjefidjwkqw9ss',
			picture: 'hwf7wh2id8fdn',
			street: 8,
			city: '2f7dhws',
			uf: 'MA',
			coords: 'nsu2nt8fidje'
		})

		collectors.push(collector)

		expect(collector).toBeTruthy()
		expect(collectors).toHaveLength(1)
	})
})
