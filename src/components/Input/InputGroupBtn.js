import { Component, h } from 'preact'
import Input from './Input'
export default class InputGroupBtn extends Component {
    render() {
        let GroupBtnClass = `btn dropdown-toggle`
        let GroupBtnType = 'default'
        if (this.props.size) {
            GroupBtnClass = `${GroupBtnClass} input-group-${this.props.size}`
        }
        if (this.props.type) {
            GroupBtnClass = `${GroupBtnClass} btn-${this.props.type}`
        }
        return (
            <div className="input-group-btn">
                <button
                    type="button"
                    class={GroupBtnClass}
                    data-toggle="dropdown"
                    aria-expanded="false">
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
