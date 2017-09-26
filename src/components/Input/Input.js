import { Component, h } from 'preact'

export default class Input extends Component {
    render() {
        let InputClass = `form-control`
        let InputType = 'text'
        if (this.props.size) {
            InputClass = `${InputClass} ${this.props.size}`
        }
        if (this.props.type) {
            InputType = `${this.props.type}`
        }
        if (this.props.type == "checkbox" || this.props.type == "radio") {
            return (
                <input type={InputType} />
            )
        } else {
            return (
                <input type={InputType} className="form-control" placeholder={this.props.placeholder} />
            )
        }
    }
}
