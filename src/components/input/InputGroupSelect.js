import { Component, h } from 'preact'
import Input from './Input'
export default class InputGroupSelect extends Component {
    render() {
        let defaultClass = `btn dropdown-toggle`
        let GroupBtnType = 'default'
        if (this.props.size) {
            defaultClass = `${defaultClass} input-group-${this.props.size}`
        }
        if (this.props.type) {
            defaultClass = `${defaultClass} btn-${this.props.type}`
        }
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <div {...this.props} className="input-group-btn">
                <button
                    type="button"
                    {...this.props}
                    class={defaultClass}
                    data-toggle="dropdown"
                    aria-expanded="false"
                >
                    {this.props.data.text}
                    <span class="fa fa-caret-down"></span>
                </button>
                <ul class="dropdown-menu">
                    {
                        this.props.data.content.map((item) => {
                            return <li><a href={item.link}>{item.text}</a></li>
                        })
                    }
                    <li class="divider"></li>
                </ul>
            </div>
        )
    }
}
