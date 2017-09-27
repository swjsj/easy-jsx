import { Component, h } from 'preact'
import InputGroup from './InputGroup'

export default class DatePicker extends Component {
    componentDidMount() {
        let id = this.props.id
        $(function () {
            $(`#${id}`).datepicker({
                autoclose: true
            })
        })
    }
    render() {
        console.log(this.props.id)
        return (
            <InputGroup class={this.props.class} id={this.props.id} beforeGroup={this.props.beforeGroup} beforeBtn={this.props.beforeBtn} afterGroup={this.props.afterGroup} placeholder="" />
        )
    }
}
