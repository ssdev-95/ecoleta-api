import {
	RegistryCollectorProps
} from '@application/use-case/registrate-collector-point';

type Override = Partial<RegistryCollectorProps>

export function makeCollectorPoint(override:Override = {}) {
	return {
		name: 'Salompas',
		whatsapp: 19393818999,
		email: 'jwjefidjwkqw9ss',
		picture: 'hwf7wh2id8fdn',
		street: 'salame',
		city: '2f7dhws',
		uf: 'MA',
		coords: 'nsu2nt8fidje',
		...override
	}
}
