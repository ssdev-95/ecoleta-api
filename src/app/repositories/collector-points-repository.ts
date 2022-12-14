import { CollectorPoint } from "../entity/collector-point";

export abstract class CollectorPointsRepository {
	abstract create(collectorPoint:CollectorPoint): Promise<void>
}
