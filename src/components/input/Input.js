import { Component, h } from 'preact'

export default class Input extends Component {
    render() {
        let defaultClass = `form-control`
        let InputType = 'text'
        if (this.props.size) {
            defaultClass = `${defaultClass} ${this.props.size}`
        }
        if(this.props.className){
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        if (this.props.type) {
            InputType = `${this.props.type}`
        }
        if (this.props.type == "checkbox" || this.props.type == "radio") {
            return (
                <input {...this.props}/>
            )
        } else {
            return (
                <input {...this.props} type={InputType} className={defaultClass} />
            )
        }
    }
}
