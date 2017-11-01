import { Component, h } from 'preact'

export default class Form extends Component {
    render() {
        let defaultClass = `form`
        if(this.props.className){
            defaultClass=`${defaultClass} ${this.props.className}`
        }
        return (
            <form action="" role="form" {...this.props} className={defaultClass}>
                {this.props.children}
            </form>
        )
    }
}
