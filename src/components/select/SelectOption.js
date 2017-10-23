import { Component, h } from 'preact'

export default class SelectOption extends Component {
    render() {
        return (
            <option {...this.props}>{this.props.children}</option>
        )
    }
}
