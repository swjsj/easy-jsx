import Head from 'preact-head'
import { h } from 'preact'
import Layout from './Layout'
import '../styles/zzadmin.css'
import SidebarMenu from './SidebarMenu';
export default ({ logo,user, menu, children }) => (
    <Layout>
        <div class="zzadmin-header">
            <div class="logo">
                <img src={logo.img} alt={logo.alt} />
                <span>{logo.text}</span>
            </div>

            <div class="user">
                <img src={user.img} alt={logo.alt}/>
                <span class="username">{logo.username}</span>
                <button class="edit-passwd">修改密码</button>
                <button class="exit">退出</button>
            </div>
        </div>

        <div class="zzadmin-body">
            <div class="sidebar">
                <SidebarMenu data={[menu]} />
            </div>
        </div>

        {children}
    </Layout>
)

