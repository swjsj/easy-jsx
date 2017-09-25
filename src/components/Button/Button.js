import React from 'preact'

export default class Button extends React.Component {
    render() {
        let ButtonClass = "btn"
        let ButtonDisabled = false
        if (this.props.disabled != undefined) {
            if (this.props.disabled == "disabled" || this.props.disabled == true) {
                ButtonDisabled = true
            }
        }
        if (this.props.flat) {
            ButtonClass = `${ButtonClass} btn-flat`
        }
        if (this.props.type) {
            ButtonClass = `${ButtonClass} btn-${this.props.type}`
        }

        switch (this.props.size) {
            case "Large":
                ButtonClass = `${ButtonClass} btn-lg`
                break
            case "Small":
                ButtonClass = `${ButtonClass} btn-sm`
                break
            case "X-Small":
                ButtonClass = `${ButtonClass} btn-xs`
                break
        }
        return (
            <button type="button" className={ButtonClass} disabled={ButtonDisabled}>{this.props.children}</button>
        )
    }
}
