import { Component, h } from 'preact'

export default class Icon extends Component {
    render() {
        let IconClass = `fa fa-fw fa-`
        if (this.props.type) {
            IconClass = `${IconClass}${this.props.type}`
        }
        if (this.props.colorType) {
            IconClass = `${IconClass} ${this.props.colorType}`
        }
        return (
            <i className={IconClass} onClick={this.props.onClick ? this.props.onClick.bind(this) : null}></i>
        )
    }
}
