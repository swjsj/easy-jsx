
import ZZAdminLayout from '../components/ZZAdminLayout'
import Menu from '../components/Menu'
import Table from '../components/Table'


const Item = ({ children }) => <div>{children}</div>
const SubMenu = ({ children }) => <div>{children}</div>
const Content = ({ children }) => <div>{children}</div>
import { Component, h } from 'preact'

var treeview = {
    treeview: 'Dashboard',
    content: [
        {
            text: 'Dashboard v1',
            content: [
                {
                    link: 'www.baidu.com',
                    text: 'Dashboard v1--1',
                },
                {
                    link: 'www.baidu.com',
                    text: 'Dashboard v1--2',
                },
                {
                    link: 'www.baidu.com',
                    text: 'Dashboard v1--3',
                }
            ]
        },
        {
            link: 'www.baidu.com',
            text: 'Dashboard v2'
        }
    ]
}

export class ZZAdmin extends Component {
    render() {
        return <ZZAdminLayout 
        logo = {{
            img:'tmp/google.png',
            text:'司空管理中心'
        }}
        user = {{
            img:'tmp/photo.jpg'
        }}
        menu={
         treeview  
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