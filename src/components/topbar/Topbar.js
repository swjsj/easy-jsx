import { h } from 'preact'
export default ({ logo, user }) => (
    <div class="topbar">
        <div class="logo">
            <img src={logo.img} alt={logo.alt} />
            <span>{logo.text}</span>
        </div>

        <div class="user">
            <img src={user.img} alt={user.alt} />
            <span class="username">{user.username}</span>
            <button class="edit-passwd">修改密码</button>
            <button class="exit">退出</button>
        </div>
    </div>
)

