import { Component, h } from 'preact'

export default class Sliders extends Component {

    componentWillMount() {
        this.counter = true
    }
    componentDidMount() {
        let _this = this
        if (this.counter) {
            this.counter = false
            $(function () {
                $('.slider').slider()
            })
        }
    }
    render() {
        let defaultClass = `slider form-control`
		if (this.props.className) {
			defaultClass = `${defaultClass} ${this.props.className}`
		}
        return (
            <input
                type="text"
                {...this.props}
                className="slider form-control"
            />
        )
    }
}
