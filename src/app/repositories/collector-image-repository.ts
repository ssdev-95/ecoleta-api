import {
	CollectorImage
} from '../entity/collector-image';

export abstract class CollectorImageRespository {
	abstract upload(collectorImage: CollectorImage): Promise<string>
}
