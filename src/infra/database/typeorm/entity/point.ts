import {
	Column,
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn
} from 'typeorm';

@Entity('points')
export class CollectorPoint extends BaseEntity {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@Column()
	name: string

	@Column()
	email: string

	@Column()
	whatsapp: number

	@Column()
	street: number

	@Column()
	city: string

	@Column()
	uf: string

	@Column()
	coords: string

	@Column()
	picture: string
}
