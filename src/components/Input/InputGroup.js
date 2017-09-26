import { Component, h } from 'preact'
import Input from './Input'
import InputGroupBtn from './InputGroupBtn'
export default class InputGroup extends Component {
    render() {
        let GroupClass = `input-group`
        let InputType = 'text'
        if (this.props.size) {
            GroupClass = `${GroupClass} input-group-${this.props.size}`
        }
        if (this.props.type) {
            InputType = `${this.props.type}`
        }
        return (
            <div class={GroupClass}>
                {this.props.beforeBtn ? <InputGroupBtn type={this.props.beforeBtn.type} data={this.props.beforeBtn} /> : null}
                {this.props.beforeGroup ? <span class="input-group-addon">{this.props.beforeGroup}</span> : null}
                <Input type="text" placeholder={this.props.placeholder} />
                {this.props.afterBtn ? <span class="input-group-btn">{this.props.beforeGroup}</span> : null}
                {this.props.afterGroup ? <span class="input-group-addon">{this.props.afterGroup}</span> : null}
            </div>
        )
    }
}
