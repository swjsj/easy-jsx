import { Component, h } from 'preact'

export default class Button extends Component {
    render() {
        let defaultClass = `btn`
        if (this.props.flat) {
            defaultClass = `${defaultClass} btn-flat`
        }
        if (this.props.type) {
            defaultClass = `${defaultClass} btn-${this.props.type}`
        }
        if (this.props.size) {
            defaultClass = `${defaultClass} btn-${this.props.size}`
        }
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <button 
                {...this.props}
                type="button"
                className={defaultClass}
            >
                {this.props.children}
            </button>
        )
    }
}
