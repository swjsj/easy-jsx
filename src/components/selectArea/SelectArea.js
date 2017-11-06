import { Component, h } from 'preact'

import Area from './Area'
import Select from '../select/Select'
import SelectOption from '../select/SelectOption'
import FormItem from '../form/FormItem'

export default class SelectArea extends Component {
	state = {
		provinces: null,
		city: null,
		county: null,
	}
	componentDidMount() {
	}
	getProvinces() {
		return Area[0].map((item, index) => {
			return (<SelectOption value={item.i}>{item.n}</SelectOption>)
		})
	}
	selectProvinces(val) {
		console.log(val)
		this.setState({
			provinces: val,
			city: null,
			county: null,
		})
	}
	selectCity(val) {
		this.setState({
			city: val,
			county: null,
		})
	}
	selectCounty(val) {
		this.setState({ county: val })
	}
	getCity() {
		if (this.state.provinces) {
			console.log(Area[this.state.provinces])
			return Area[this.state.provinces].map((item, index) => {
				return (<SelectOption value={item.i}>{item.n}</SelectOption>)
			})
		}
	}
	getCounty() {
		if (this.state.city) {
			return Area[this.state.city].map((item, index) => {
				return (<SelectOption value={item.i}>{item.n}</SelectOption>)
			})
		}
	}
	render() {
		let defaultClass = ``
		if (this.props.className) {
			defaultClass = `${defaultClass} ${this.props.className}`
		}
		return (
			<div className={defaultClass}>
				<FormItem>
					<Select onChange={(text) => { this.selectProvinces(text) }}>
						<SelectOption value={'def'}>请选择</SelectOption>
						{this.getProvinces()}
					</Select>
				</FormItem>
				<FormItem>
					<Select onChange={(text) => { this.selectCity(text) }} value={this.state.city ? this.state.city : 'def'}>
						<SelectOption value={'def'}>请选择</SelectOption>
						{this.getCity()}
					</Select>
				</FormItem>
				<FormItem>
					<Select onChange={(text) => { this.selectCounty(text) }} value={this.state.county ? this.state.county : 'def'}>
						<SelectOption value={'def'}>请选择</SelectOption>
						{this.getCounty()}
					</Select>
				</FormItem>
			</div>
		)
	}
}
