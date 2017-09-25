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
            GroupBtnClass = `${GroupBtnClass} ${this.props.type}`
        }
        return (
            <div className="input-group-btn">
                <button
                    type="button"
                    class={GroupBtnClass}
                    data-toggle="dropdown"
                    aria-expanded="false">
                    {this.props.children}
                    <span class="fa fa-caret-down"></span>
                </button>
                <ul class="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li class="divider"></li>
                    <li><a href="#">Separated link</a></li>
                </ul>
            </div>
        )
    }
}
