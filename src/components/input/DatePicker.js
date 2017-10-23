import { Component, h } from 'preact'
import Input from './Input'

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
        let defaultClass = `form-control`
        if(this.props.className){
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <Input type="text" {...this.props} className={defaultClass}/>
        )
    }
}
