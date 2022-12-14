import { CollectorPoint } from './collector-point';

describe('Collector Point', () => {
	it('should be able to create new collector point', () => {
		const collector = new CollectorPoint({
			name: 'Salompas',
			whatsapp: 19393818999,
			email: 'jwjefidjwkqw9ss',
			picture: 'hwf7wh2id8fdn',
			street: 8,
			city: '2f7dhws',
			uf: 'MA',
			coords: 'nsu2nt8fidje'
		})

		expect(collector).toBeTruthy()
	})
})
