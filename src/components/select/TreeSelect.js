import { Component, h } from 'preact'
import Tree from '../tree/Tree'
import('./TreeSelect.less')

export default class TreeSelect extends Component {

	constructor(props) {
		super(props)
		this.state = {
			switch: false,
			text: '请选择',
			value: null,
			isSelect: false
		}
	}

	isShowSelect() {
		let switchs = this.state.switch
		this.setState({
			switch: !switchs,
			isSelect: true
		})
	}

	select(item) {
		let switchs = this.state.switch
		this.setState({
			text: item.text,
			value: item.text,
			switch: !switchs,
			isSelect: true
		})
	}

	getList() {
		if (this.state.switch) {
			return (
				<div className="select-tree-list">
					<Tree data={this.props.data} type="TreeSelect" onSelect={this.select.bind(this)} />
				</div>
			)
		} else {
			return null
		}
	}

	render() {
		let defaultClass = `select-tree`
		let value
		if (this.props.className) {
			defaultClass = `${defaultClass} ${this.props.className}`
		}
		if (isSelect) {
			value = this.state.value
		} else {
			value = this.props.value ? this.props.value : this.state.value
		}
		return (
			<div className={defaultClass}>
				<div className="select-tree-box form-control" onClick={this.isShowSelect.bind(this)}>
					<input type="text" {...this.props} className="hide" value={value} />
					<span className="select-tree-rendered">{this.state.text}</span>
					<span className="ant-select-arrow"></span>
				</div>
				{this.getList()}
			</div>
		)
	}
}
