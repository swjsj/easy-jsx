import { Component, h } from 'preact'

export default class Menu extends Component {
    render() {
        return <div>{this.props.children}</div>
    }

}