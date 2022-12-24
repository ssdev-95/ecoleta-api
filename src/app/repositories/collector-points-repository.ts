import { CollectorPoint } from "../entity/collector-point";

export interface Selectors {
	uf: string[]
	city: string[]
}

export abstract class CollectorPointsRepository {
	abstract create(collectorPoint:CollectorPoint): Promise<void>
	abstract findManyByCity(city:string): Promise<CollectorPoint[]>
	abstract findById(id:string): Promise<CollectorPoint>
	abstract getSelectors(): Promise<Selectors>
}
