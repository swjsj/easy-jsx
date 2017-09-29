import { Component, h } from 'preact'

export default class Alert extends Component {
    render() {
        let AlertClass = `alert alert-${this.props.type} ${this.props.className} alert-dismissible `
        return (
            <div class={AlertClass}>
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4>
                    {this.props.icon ? this.props.icon : null}
                    {this.props.title}
                </h4>
                {this.props.children}
            </div>
        )
    }
}
