import {
	CollectorPoint, CollectorPointProps
} from '../entity/collector-point';

interface CreateCollectorPointResponse {
	collectorPoint: CollectorPoint
}

export class CreateCollectorPoint {
	async execute(
		props:CollectorPointProps
	):Promise<CreateCollectorPointResponse>{

		const collectorPoint = new CollectorPoint(props)

		return {
			collectorPoint
		}
	}
}
