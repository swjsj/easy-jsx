import { Component, h } from 'preact'

export default class Form extends Component {
    render() {
        let FormClass = `form ${this.props.className}`
        return (
            <form action="" role="form" className={FormClass}>
                {this.props.children}
            </form>
        )
    }
}
