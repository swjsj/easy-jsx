import { Component, h } from 'preact'

export default class SelectOption extends Component {
    render() {
        return (
            <option selected={this.props.selected} value={this.props.value}>{this.props.children}</option>
        )
    }
}
