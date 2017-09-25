import { Component, h } from 'preact'

export default class Form extends Component {
    render() {
        
        return (
            <form action="" role="form" className="form">
                {this.props.children}
            </form>
        )
    }
}
