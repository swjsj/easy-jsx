import { Component, h } from 'preact'

export default class Form extends Component {
    render() {
        let defaultClass = `form`
        if(this.props.className){
            defaultClass=`${defaultClass} ${this.props.className}`
        }
        return (
            <form action="" role="form" className={defaultClass} id={this.props.id} name={this.props.name}>
                {this.props.children}
            </form>
        )
    }
}
