export interface CollectorImageProps {
	name: string
	image: string
}

export class CollectorImage {
	private props:CollectorImageProps = {} as CollectorImageProps

	constructor(props?: CollectorImageProps) {
		if(!props) throw new Error('Invalid image props')
		this.props = props
	}

	public get name() {
		return this.props.name
	}

	public get image() {
		return this.props.image
	}
}
