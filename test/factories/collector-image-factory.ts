import {
	CollectorImageProps
} from "@application/entity/collector-image";

type Override = Partial<CollectorImageProps>

export function makeCollectorImage(override:Override={}) {
	return {
		name: 'test.png',
		image: 'test_boladaun.png',
		type: 'base64',
		...override
	}
}
