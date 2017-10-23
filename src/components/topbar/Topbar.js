import { h,Component } from 'preact'

export default class Topbar extends Component{

    sidebarToggle(){
        $(this.base).parent().toggleClass("sidebar-mini");
    }

    render(){
        //var { logo, user } = {...this.props}
        var logo = this.props.logo;
        var user = this.props.user;
        return <div class="topbar">
        <div class="logo">
            <span class="logo-mini">SK</span>
            <span class="logo-lg-2">
                <img src={logo.img} alt={logo.alt} />
                <span>{logo.text}</span>
            </span>
        </div>

        <nav class="navbar">
            <a href="#" class="sidebar-toggle" data-toggle="push-menu" onClick={this.sidebarToggle.bind(this)}></a>
            <div class="user">
                <img src={user.img} alt={user.alt} />
                <span class="username">{user.username}</span>
                <button class="edit-passwd">修改密码</button>
                <button class="exit">退出</button>
            </div>
        </nav>
    </div>
    }
}

