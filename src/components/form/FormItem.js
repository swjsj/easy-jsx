import { Component, h } from 'preact'

export default class FormItem extends Component {
    render() {
        let defaultClass = `form-group`
        if(this.props.className){
            defaultClass=`${defaultClass} ${this.props.className}`
        }
        return (
            <div {...this.props} className={defaultClass}>
                {this.props.children}
            </div>
        )
    }
}
