import { Component, h } from 'preact'

export default class Icon extends Component {
    render() {
        let defaultClass = `fa fa-fw fa-`
        if (this.props.type) {
            defaultClass = `${defaultClass}${this.props.type}`
        }
        if (this.props.colorType) {
            defaultClass = `${defaultClass} ${this.props.colorType}`
        }
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <i {...this.props} className={defaultClass}></i>
        )
    }
}
