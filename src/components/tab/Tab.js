import { Component, h } from 'preact'

export default class Tab extends Component {
    render() {
        let defaultClass = `btn`
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <div
                {...this.props}
                className={defaultClass}
            >
                <div className="tabs">
                    
                </div>
                <div className="tableContent">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
