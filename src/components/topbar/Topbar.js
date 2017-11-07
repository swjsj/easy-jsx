import { h, Component } from 'preact'
import Icon from '../icon/Icon'

export default class Topbar extends Component {

    sidebarToggle() {
        $(this.base).parent().toggleClass("sidebar-mini");
    }
    gitToolHtml() {
        var toolData = this.props.data.tool;
        var listHtml = toolData.map((item) => { return this.gitToolItemHtml(item) })
        return listHtml;
    }
    gitIcon(item) {
        if (item.icon) {
            return (
                <Icon type={item.icon} />
            )
        } else {
            return null
        }
    }
    gitLabel(item) {
        var labelClass = `label`
        item.label_bg ? labelClass = `${labelClass} ${item.label_bg}` : null
        if (item.label_bg) {
            return (
                <span class={labelClass}>{item.number}</span>
            )
        } else {
            return null
        }
    }

    gitToolItemHtml(item) {
        var listHtml = <li className="">
            <a href="#" class="">
                {this.gitIcon(item)}
                {this.gitLabel(item)}
            </a>
        </li>
        return listHtml;
    }

    render() {
        //var { logo, user } = {...this.props}
        var logo = this.props.logo;
        var user = this.props.user;

        return
        <div class="topbar">
            <div class="logo">
                <span class="logo-mini">{logo.minText || 'SK'}</span>
                <span class="logo-lg-2">
                    <img src={logo.img} alt={logo.alt} />
                    <span>{logo.text}</span>
                </span>
            </div>

            <nav class="navbar">
                <a href="#" class="sidebar-toggle" data-toggle="push-menu" onClick={this.sidebarToggle.bind(this)}></a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {this.gitToolHtml()}
                        <li class="user">
                            <img src={user.img} alt={user.alt} />
                            <span class="username">{user.username}</span>
                            <button class="edit-passwd">修改密码</button>
                            <button class="exit">退出</button>
                        </li>
                    </ul>
                </div>


            </nav>
        </div>
    }
}

