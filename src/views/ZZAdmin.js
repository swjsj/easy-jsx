
import ZZStyleLayout from '../components/zzstyle/ZZStyleLayout'
import Table from '../components/table/Table'
import TreeTable from '../components/table/TreeTable'


import { Component, h } from 'preact'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
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

var data = [
    {
        "id": 0,
        "name": "Item 0",
        "price": "$0"
    },
    {
        "id": 1,
        "name": "Item 1",
        "price": "$1"
    },
    {
        "id": 2,
        "name": "Item 2",
        "price": "$2"
    },
    {
        "id": 3,
        "name": "Item 3",
        "price": "$3"
    },
    {
        "id": 4,
        "name": "Item 4",
        "price": "$4"
    },
    {
        "id": 5,
        "name": "Item 5",
        "price": "$5"
    }
];


var menu = [{
    "id": 1,
    "text": "总经办",
    "state": "open",
    "checked": false,
    "attributes": null,
    "iconCls": "fi-social-windows",
    "pid": null,
    "openMode": null
}, {
    "id": 6,
    "text": "测试组",
    "state": "open",
    "checked": false,
    "attributes": null,
    "iconCls": "fi-social-snapchat",
    "pid": 3,
    "openMode": null
}, {
    "id": 7,
    "text": "开发组",
    "state": "open",
    "checked": false,
    "attributes": null,
    "iconCls": "fi-folder",
    "pid": 3,
    "openMode": null
}, {
    "id": 3,
    "text": "技术部",
    "state": "open",
    "checked": false,
    "attributes": null,
    "iconCls": "fi-social-github",
    "pid": null,
    "openMode": null
}, {
    "id": 5,
    "text": "产品部",
    "state": "open",
    "checked": false,
    "attributes": null,
    "iconCls": "fi-social-apple",
    "pid": null,
    "openMode": null
}, {
    "id": 8,
    "text": "下游客户",
    "state": "open",
    "checked": false,
    "attributes": null,
    "iconCls": "fi-folder",
    "pid": null,
    "openMode": null
}]

var treeTableData = 
[{
	"id": 1,
	"text": "权限管理",
	"state": "open",
	"checked": false,
	"attributes": "",
	"iconCls": "fi-folder",
	"pid": null,
	"openMode": ""
}, {
	"id": 227,
	"text": "登录日志",
	"state": "open",
	"checked": false,
	"attributes": "/sysLog/manager",
	"iconCls": "fi-info",
	"pid": 221,
	"openMode": "ajax"
}, {
	"id": 228,
	"text": "Druid监控",
	"state": "open",
	"checked": false,
	"attributes": "/druid",
	"iconCls": "fi-monitor",
	"pid": 221,
	"openMode": "iframe"
}, {
	"id": 229,
	"text": "系统图标",
	"state": "open",
	"checked": false,
	"attributes": "/icons.html",
	"iconCls": "fi-photo",
	"pid": 221,
	"openMode": "ajax"
}, {
	"id": 241,
	"text": "司空生活",
	"state": "open",
	"checked": false,
	"attributes": "http://www.skong.com",
	"iconCls": "fi-home",
	"pid": 222,
	"openMode": "iframe"
}, {
	"id": 11,
	"text": "资源管理",
	"state": "open",
	"checked": false,
	"attributes": "/resource/manager",
	"iconCls": "fi-database",
	"pid": 1,
	"openMode": "ajax"
}, {
	"id": 224,
	"text": "善忘书籍",
	"state": "open",
	"checked": false,
	"attributes": "http://book.swjsj.com",
	"iconCls": "fi-video",
	"pid": 222,
	"openMode": "iframe"
}, {
	"id": 12,
	"text": "角色管理",
	"state": "open",
	"checked": false,
	"attributes": "/role/manager",
	"iconCls": "fi-torso-business",
	"pid": 1,
	"openMode": "ajax"
}, {
	"id": 222,
	"text": "我的地盘",
	"state": "closed",
	"checked": false,
	"attributes": "",
	"iconCls": "fi-folder",
	"pid": null,
	"openMode": ""
}, {
	"id": 13,
	"text": "用户管理",
	"state": "open",
	"checked": false,
	"attributes": "/user/manager",
	"iconCls": "fi-torsos-all",
	"pid": 1,
	"openMode": "ajax"
}, {
	"id": 221,
	"text": "日志监控",
	"state": "closed",
	"checked": false,
	"attributes": "",
	"iconCls": "fi-folder",
	"pid": null,
	"openMode": null
}, {
	"id": 14,
	"text": "部门管理",
	"state": "open",
	"checked": false,
	"attributes": "/organization/manager",
	"iconCls": "fi-results-demographics",
	"pid": 1,
	"openMode": "ajax"
}]

export class ZZAdmin extends Component {

    render() {
        return <ZZStyleLayout>
            <Topbar logo={{
                img: 'tmp/google.png',
                text: '司空管理中心'
            }}
                user={{
                    username: '二花爱猫咪123',
                    img: 'tmp/photo.jpg'
                }} />
            <div class="container">
                <Sidebar data={{ menu: menu }} />
                <div class="content">
                    {/* <Table data={data}></Table> */}
                    <TreeTable data={treeTableData}></TreeTable>
                </div>
            </div>
        </ZZStyleLayout>
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