import {
	Column,
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn
} from 'typeorm';

@Entity({ name:'points', schema:'public'  })
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
	street: string

	@Column()
	city: string

	@Column()
	uf: string

	@Column()
	coords: string

	@Column()
	picture: string

	@Column()
	categories: string
}
