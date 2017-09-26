import { Component, h } from 'preact'

export default class Select extends Component {
	componentDidMount() {
		$(function () {
			$('.select2').select2()
		})
	}

	render() {
		return (
			<select className="form-control select2" style="width: 100%;">
				<option selected="selected">Alabama</option>
				<option>Alaska</option>
				<option>California</option>
				<option>Delaware</option>
				<option>Tennessee</option>
				<option>Texas</option>
				<option>Washington</option>
			</select>
		)
	}
}
