import { Component, h } from 'preact'

export default class Button extends Component {
    render() {
        let ButtonClass = `btn`
        let ButtonDisabled = false
        if (this.props.disabled != undefined) {
            if (this.props.disabled == "disabled" || this.props.disabled == true) {
                ButtonDisabled = true
            }
        }
        if (this.props.flat) {
            ButtonClass = `${ButtonClass} btn-flat`
        }
        if (this.props.type) {
            ButtonClass = `${ButtonClass} btn-${this.props.type}`
        }
        if (this.props.size) {
            ButtonClass = `${ButtonClass} btn-${this.props.size}`
        }
        return (
            <button type="button" className={ButtonClass} disabled={ButtonDisabled}>{this.props.children}</button>
        )
    }
}
