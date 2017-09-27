import { Component, h } from 'preact'

export default class Select extends Component {
	componentDidMount() {
		$(function () {
			$('.select2').select2()
		})
	}

	render() {
		return (
			<select className="form-control select2 select2-hidden-accessible" style="width: 100%;">
				{this.props.children}
			</select>
		)
	}
}
