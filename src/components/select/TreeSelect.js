import { Component, h } from 'preact'
import Tree from '../tree/Tree'

export default class TreeSelect extends Component {
	componentDidMount() {

	}

	isShowSelect() {

	}
	componentDidUpdate() {
		this._renderLayer();
	}

	render() {
		return (
			<div className="select-tree">
				<div className="select-tree-box">
					<span className="ant-select-selection__rendered" onClick={this.isShowSelect()}>11111</span>
					<span className="ant-select-arrow"></span>
				</div>
				<div className="select-tree-list">
					{<Tree data={this.props.data} />}
				</div>
			</div>

		)
	}
}
