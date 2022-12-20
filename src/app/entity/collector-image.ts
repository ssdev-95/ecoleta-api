export interface CollectorImageProps {
	image: string
	type: string
	name:string
}

export class CollectorImage {
	private props:CollectorImageProps = {} as CollectorImageProps

	constructor(props?: CollectorImageProps) {
		if(!props) throw new Error('Invalid image props')
		this.props = props
	}

	public get image() {
		return this.props.image
	}

	public get type() {
		return this.props.type
	}

	public get name() {
		return this.props.name
	}
}
