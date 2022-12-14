import { randomUUID } from 'crypto';

export interface CollectorPointProps {
	name: string
	email: string
	whatsapp: number
	street: number
	city: string
	uf: string
	coords: string
	picture: string
}

export class CollectorPoint {
	private _id:string
	private props: CollectorPointProps

	constructor(props:CollectorPointProps) {
		if(!props || !Object.values(props).length) {
			throw new Error('Invalid data/values provided')
		}

		this._id = randomUUID()
		this.props = props
	}

	public get id() {
		return this._id
	}

	public get name() {
		return this.props.name
	}

	public get email() {
		return this.props.email
	}

	public get whatsapp() {
		return this.props.whatsapp
	}

	public get city() {
		return this.props.city
	}

	public get street() {
		return this.props.street
	}

	public get uf() {
		return this.props.uf
	}

	public get coords() {
		return this.props.coords
	}

	public get picture() {
		return this.props.picture
	}
}
