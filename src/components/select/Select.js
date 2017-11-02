import { Component, h } from 'preact'

export default class Select extends Component {
	componentDidMount() {
		let $this = this
	}
	render() {
		let defaultClass = `form-control`
		if (this.props.className) {
			defaultClass = `${defaultClass} ${this.props.className}`
		}
		return (
			<select {...this.props} className={defaultClass} onChange={(event) => { this.props.onChange(event.target.value, event) }}>
				{this.props.children}
			</select >
		)
	}
}
