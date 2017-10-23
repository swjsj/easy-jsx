import { Component, h } from 'preact'

export default class Select extends Component {
	componentDidMount() {
		$(function () {
			$('.select2').select2()
		})
	}
	render() {
		let defaultClass = `form-control select2 select2-hidden-accessible`
		if (this.props.className) {
			defaultClass = `${defaultClass} ${this.props.className}`
		}
		return (
			<select {...this.props} className={defaultClass}>
				{this.props.children}
			</select>
		)
	}
}
