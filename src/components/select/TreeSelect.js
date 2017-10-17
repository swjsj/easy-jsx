import { Component, h } from 'preact'
import Tree from '../tree/Tree'

export default class TreeSelect extends Component {

	constructor(props) {
		super(props)
		this.state = {
			switch: false,
			text: '请选择',
			value: null
		}
	}

	isShowSelect() {
		let switchs = this.state.switch
		this.setState({
			switch: !switchs
		})
	}

	select(item) {
		let switchs = this.state.switch
		this.setState({
			text: item.text,
			value: item.text,
			switch: !switchs
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
		return (
			<div className="select-tree">
				<div className="select-tree-box">
					<input type="text" className="hide" name={this.props.name} value={this.state.value} />
					<span className="ant-select-selection__rendered" onClick={this.isShowSelect.bind(this)}>{this.state.text}</span>
					<span className="ant-select-arrow"></span>
				</div>
				{this.getList()}
			</div>
		)
	}
}
