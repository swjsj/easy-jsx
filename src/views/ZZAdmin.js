
import ZZAdminLayout from '../components/ZZAdminLayout'
import Menu from '../components/Menu'
import Table from '../components/Table'

const Item = ({children}) => <div>{children}</div>
const SubMenu =  ({children}) => <div>{children}</div>
const Content =  ({children}) => <div>{children}</div>
import {Component,h} from 'preact'
export class ZZAdmin extends Component{
    render(){
        return  <ZZAdminLayout menu={
            <Menu default="订单管理">
                <Item>订单管理</Item>
                <Item>
                    会员管理
            <SubMenu>
                        <Item>个人会员</Item>
                        <Item>机构管理</Item>
                        <Item>平台角色</Item>
                    </SubMenu>
                </Item>
                <Item>
                    方案管理
            <SubMenu>
                        <Item>...</Item>
                        <Item>...</Item>
                        <Item>...</Item>
                    </SubMenu>
                </Item>
                <Item>
                    定制商品
            <SubMenu>
                        <Item>...</Item>
                        <Item>...</Item>
                        <Item>...</Item>
                    </SubMenu>
                </Item>
                <Item>
                    内容管理
            <SubMenu>
                        <Item>...</Item>
                        <Item>...</Item>
                        <Item>...</Item>
                    </SubMenu>
                </Item>
                <Item>
                    系统配置
            <SubMenu>
                        <Item>...</Item>
                        <Item>...</Item>
                        <Item>...</Item>
                    </SubMenu>
                </Item>
            </Menu>
            }>
        
        
            <Content>
                <Table>
        
                </Table>
            </Content>
        </ZZAdminLayout>
    }
}

//  export default (<div>abc</div>)

//import { Component, h } from 'preact'

//  class ZZAdmin extends Component {
//     render() {
//         return <div>abc</div>
//     }

// }

export default (<ZZAdmin />)