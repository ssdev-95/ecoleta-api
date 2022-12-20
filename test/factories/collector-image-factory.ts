import {
	CollectorImageProps
} from "@application/entity/collector-image";

type Override = Partial<CollectorImageProps>

export function makeCollectorImage(override:Override={}) {
	return {
		name: 'image_boladona',
		image: 'image_boladona.png',
		...override
	}
}
