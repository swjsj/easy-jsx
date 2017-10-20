import { Component, h } from 'preact'
import Input from './Input'
import InputGroupSelect from './InputGroupSelect'
export default class InputGroup extends Component {
    render() {
        let defaultClass = `input-group`
        let InputType = 'text'
        if (this.props.size) {
            defaultClass = `${defaultClass} input-group-${this.props.size}`
        }
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        if (this.props.type) {
            InputType = `${this.props.type}`
        }
        return (
            <div class={defaultClass}>
                {this.props.beforeBtn ? <InputGroupSelect type={this.props.beforeBtn.type} data={this.props.beforeBtn} /> : null}
                {this.props.beforeGroup ? <span class="input-group-addon">{this.props.beforeGroup}</span> : null}
                <Input {...this.props}  type="text" />
                {this.props.afterBtn ? <span class="input-group-btn">{this.props.beforeGroup}</span> : null}
                {this.props.afterGroup ? <span class="input-group-addon">{this.props.afterGroup}</span> : null}
            </div>
        )
    }
}
