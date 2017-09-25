import { Component, h } from 'preact'

export default class Sliders extends Component {
    componentDidMount() {
        $(function () {
            $('.slider').slider()
        })

    }
    render() {
        let props = this.props
        return (
            <input
                type="text"
                value=""
                className="slider form-control"
                data-slider-min={props.min}
                data-slider-max={props.max}
                data-slider-step={props.step}
                data-slider-value={props.value}
                data-slider-orientation={props.orientation}
                data-slider-selection={props.selection}
                data-slider-tooltip={props.tooltip}
                data-slider-id={props.type} 
                />
        )
    }
}
