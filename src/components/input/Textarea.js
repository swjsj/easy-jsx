import { Component, h } from 'preact'

export default class Textarea extends Component {
    render() {
        let defaultClass = `form-control`
        if(this.props.className){
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <textarea rows="3" {...this.props} class={defaultClass}></textarea>
        )
    }
}
