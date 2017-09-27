import { Component, h } from 'preact'

export default class Icon extends Component {
    render() {
        let IconClass = `fa fa-fw fa-${this.props.type} ${this.props.colorType}`
        return (
            <i className={IconClass}></i>
        )
    }
}
