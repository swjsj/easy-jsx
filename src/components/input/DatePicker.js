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
        return (
            <InputGroup {...this.props}  />
        )
    }
}
