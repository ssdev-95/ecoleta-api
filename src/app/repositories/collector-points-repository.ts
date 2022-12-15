import { CollectorPoint } from "../entity/collector-point";

export abstract class CollectorPointsRepository {
	abstract create(collectorPoint:CollectorPoint): Promise<void>
	abstract findManyByCity(city:string): Promise<CollectorPoint[]>
	abstract findById(id:string): Promise<CollectorPoint>
}
