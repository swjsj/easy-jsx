import { Component, h } from 'preact'
import Input from './Input'
import InputGroupSelect from './InputGroupSelect'
export default class InputGroup extends Component {
    render() {
        let GroupClass = `input-group`
        let InputType = 'text'
        if (this.props.size) {
            GroupClass = `${GroupClass} input-group-${this.props.size}`
        }
        if (this.props.class) {
            GroupClass = `${GroupClass} ${this.props.class}`
        }
        if (this.props.type) {
            InputType = `${this.props.type}`
        }
        console.log(this.props.id)
        return (
            <div class={GroupClass}>
                {this.props.beforeBtn ? <InputGroupSelect type={this.props.beforeBtn.type} data={this.props.beforeBtn} /> : null}
                {this.props.beforeGroup ? <span class="input-group-addon">{this.props.beforeGroup}</span> : null}
                <Input type="text" placeholder={this.props.placeholder} id={this.props.id}/>
                {this.props.afterBtn ? <span class="input-group-btn">{this.props.beforeGroup}</span> : null}
                {this.props.afterGroup ? <span class="input-group-addon">{this.props.afterGroup}</span> : null}
            </div>
        )
    }
}
