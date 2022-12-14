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
	private props:CollectorPointProps

	constructor (props:CollectorPointProps) {
		const isValidProps = Object.values(props)

		if(!isValidProps.length) {
			throw new Error('Invalid or incomplete collector point infos provided')
		}

		this.props = props
	}

	get value() {
		return this.props
	}
}
