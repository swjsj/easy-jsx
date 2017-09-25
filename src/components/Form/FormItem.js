import { Component, h } from 'preact'

export default class FormItem extends Component {
    render() {

        return (
            <div className="form-group">
                {this.props.children}
            </div>
        )
    }
}
