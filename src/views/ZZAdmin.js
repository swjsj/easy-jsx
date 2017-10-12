
import ZZStyleLayout from '../components/zzstyle/ZZStyleLayout'
import Table from '../components/table/Table'
import TreeTable from '../components/table/TreeTable'


import { Component, h } from 'preact'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'
import Content from './Content'
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


var menu = [{ "id": 1, "text": "权限管理", "state": "open", "checked": false, "attributes": "", "iconCls": "fi-folder", "pid": null, "openMode": "" }, { "id": 227, "text": "登录日志", "state": "open", "checked": false, "attributes": "/sysLog/manager", "iconCls": "fi-info", "pid": 221, "openMode": "ajax" }, { "id": 228, "text": "Druid监控", "state": "open", "checked": false, "attributes": "/druid", "iconCls": "fi-monitor", "pid": 221, "openMode": "iframe" }, { "id": 229, "text": "系统图标", "state": "open", "checked": false, "attributes": "/icons.html", "iconCls": "fi-photo", "pid": 221, "openMode": "ajax" }, { "id": 241, "text": "司空生活", "state": "open", "checked": false, "attributes": "http://www.skong.com", "iconCls": "fi-home", "pid": 222, "openMode": "iframe" }, { "id": 11, "text": "资源管理", "state": "open", "checked": false, "attributes": "/resource/manager", "iconCls": "fi-database", "pid": 1, "openMode": "ajax" }, { "id": 224, "text": "善忘书籍", "state": "open", "checked": false, "attributes": "http://book.swjsj.com", "iconCls": "fi-video", "pid": 222, "openMode": "iframe" }, { "id": 12, "text": "角色管理", "state": "open", "checked": false, "attributes": "/role/manager", "iconCls": "fi-torso-business", "pid": 1, "openMode": "ajax" }, { "id": 222, "text": "我的地盘", "state": "closed", "checked": false, "attributes": "", "iconCls": "fi-folder", "pid": null, "openMode": "" }, { "id": 13, "text": "用户管理", "state": "open", "checked": false, "attributes": "/user/manager", "iconCls": "fi-torsos-all", "pid": 1, "openMode": "ajax" }, { "id": 221, "text": "日志监控", "state": "closed", "checked": false, "attributes": "", "iconCls": "fi-folder", "pid": null, "openMode": null }, { "id": 14, "text": "部门管理", "state": "open", "checked": false, "attributes": "/organization/manager", "iconCls": "fi-results-demographics", "pid": 1, "openMode": "ajax" }]
var treeTableData = [
    {
        "id": 1,
        "name": "权限管理",
        "url": "",
        "openMode": "",
        "description": "系统管理",
        "pid": null,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-folder"
    },
    {
        "id": 111,
        "name": "列表",
        "url": "/resource/treeGrid",
        "openMode": "ajax",
        "description": "资源列表",
        "pid": 11,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-list"
    },
    {
        "id": 112,
        "name": "添加",
        "url": "/resource/add",
        "openMode": "ajax",
        "description": "资源添加",
        "pid": 11,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-add"
    },
    {
        "id": 113,
        "name": "编辑",
        "url": "/resource/edit",
        "openMode": "ajax",
        "description": "资源编辑",
        "pid": 11,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-edit"
    },
    {
        "id": 114,
        "name": "删除",
        "url": "/resource/delete",
        "openMode": "ajax",
        "description": "资源删除",
        "pid": 11,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-delete"
    },
    {
        "id": 121,
        "name": "列表",
        "url": "/role/dataGrid",
        "openMode": "ajax",
        "description": "角色列表",
        "pid": 12,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-list"
    },
    {
        "id": 122,
        "name": "添加",
        "url": "/role/add",
        "openMode": "ajax",
        "description": "角色添加",
        "pid": 12,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-add"
    },
    {
        "id": 123,
        "name": "编辑",
        "url": "/role/edit",
        "openMode": "ajax",
        "description": "角色编辑",
        "pid": 12,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-edit"
    },
    {
        "id": 124,
        "name": "删除",
        "url": "/role/delete",
        "openMode": "ajax",
        "description": "角色删除",
        "pid": 12,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-delete"
    },
    {
        "id": 125,
        "name": "授权",
        "url": "/role/grant",
        "openMode": "ajax",
        "description": "角色授权",
        "pid": 12,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-check"
    },
    {
        "id": 131,
        "name": "列表",
        "url": "/user/dataGrid",
        "openMode": "ajax",
        "description": "用户列表",
        "pid": 13,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-list"
    },
    {
        "id": 132,
        "name": "添加",
        "url": "/user/add",
        "openMode": "ajax",
        "description": "用户添加",
        "pid": 13,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-add"
    },
    {
        "id": 133,
        "name": "编辑",
        "url": "/user/edit",
        "openMode": "ajax",
        "description": "用户编辑",
        "pid": 13,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-edit"
    },
    {
        "id": 134,
        "name": "删除",
        "url": "/user/delete",
        "openMode": "ajax",
        "description": "用户删除",
        "pid": 13,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-delete"
    },
    {
        "id": 141,
        "name": "列表",
        "url": "/organization/treeGrid",
        "openMode": "ajax",
        "description": "用户列表",
        "pid": 14,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-list"
    },
    {
        "id": 142,
        "name": "添加",
        "url": "/organization/add",
        "openMode": "ajax",
        "description": "部门添加",
        "pid": 14,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-add"
    },
    {
        "id": 143,
        "name": "编辑",
        "url": "/organization/edit",
        "openMode": "ajax",
        "description": "部门编辑",
        "pid": 14,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-edit"
    },
    {
        "id": 144,
        "name": "删除",
        "url": "/organization/delete",
        "openMode": "ajax",
        "description": "部门删除",
        "pid": 14,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-page-delete"
    },
    {
        "id": 227,
        "name": "登录日志",
        "url": "/sysLog/manager",
        "openMode": "ajax",
        "description": null,
        "pid": 221,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2016-09-30 22:10:53",
        "iconCls": "fi-info"
    },
    {
        "id": 228,
        "name": "Druid监控",
        "url": "/druid",
        "openMode": "iframe",
        "description": null,
        "pid": 221,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2016-09-30 22:12:50",
        "iconCls": "fi-monitor"
    },
    {
        "id": 229,
        "name": "系统图标",
        "url": "/icons.html",
        "openMode": "ajax",
        "description": null,
        "pid": 221,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2016-12-24 15:53:47",
        "iconCls": "fi-photo"
    },
    {
        "id": 241,
        "name": "司空生活",
        "url": "http://www.skong.com",
        "openMode": "iframe",
        "description": null,
        "pid": 222,
        "seq": 0,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2017-09-28 11:35:57",
        "iconCls": "fi-home"
    },
    {
        "id": 11,
        "name": "资源管理",
        "url": "/resource/manager",
        "openMode": "ajax",
        "description": "资源管理",
        "pid": 1,
        "seq": 1,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-database"
    },
    {
        "id": 224,
        "name": "善忘书籍",
        "url": "http://book.swjsj.com",
        "openMode": "iframe",
        "description": null,
        "pid": 222,
        "seq": 1,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2015-12-06 12:45:28",
        "iconCls": "fi-video"
    },
    {
        "id": 12,
        "name": "角色管理",
        "url": "/role/manager",
        "openMode": "ajax",
        "description": "角色管理",
        "pid": 1,
        "seq": 2,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-torso-business"
    },
    {
        "id": 222,
        "name": "我的地盘",
        "url": "",
        "openMode": "",
        "description": null,
        "pid": null,
        "seq": 2,
        "status": 0,
        "opened": 0,
        "resourceType": 0,
        "createTime": "2015-12-06 12:40:42",
        "iconCls": "fi-folder"
    },
    {
        "id": 13,
        "name": "用户管理",
        "url": "/user/manager",
        "openMode": "ajax",
        "description": "用户管理",
        "pid": 1,
        "seq": 3,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-torsos-all"
    },
    {
        "id": 221,
        "name": "日志监控",
        "url": "",
        "openMode": null,
        "description": null,
        "pid": null,
        "seq": 3,
        "status": 0,
        "opened": 0,
        "resourceType": 0,
        "createTime": "2015-12-01 11:44:20",
        "iconCls": "fi-folder"
    },
    {
        "id": 14,
        "name": "部门管理",
        "url": "/organization/manager",
        "openMode": "ajax",
        "description": "部门管理",
        "pid": 1,
        "seq": 4,
        "status": 0,
        "opened": 1,
        "resourceType": 0,
        "createTime": "2014-02-19 01:00:00",
        "iconCls": "fi-results-demographics"
    },
    {
        "id": 226,
        "name": "修改密码",
        "url": "/user/editPwdPage",
        "openMode": "ajax",
        "description": null,
        "pid": null,
        "seq": 4,
        "status": 0,
        "opened": 1,
        "resourceType": 1,
        "createTime": "2015-12-07 20:23:06",
        "iconCls": "fi-unlock"
    }
]

var datagrid = {
    url: '${path }/organization/treeGrid',
    idField: 'id',
    treeField: 'name',
    parentField: 'pid',
    fit: true,
    fitColumns: false,
    border: false,
    frozenColumns: [[{
        title: 'id',
        field: 'id',
        width: 40,
        hidden: true
    }]],
    columns: [[{
        field: 'id',
        title: '编号',
        width: 40
    }, {
        field: 'name',
        title: '部门名称',
        width: 180
    }, {
        field: 'seq',
        title: '排序',
        width: 40
    }, {
        field: 'iconCls',
        title: '图标',
        width: 120
    }, {
        width: '130',
        title: '创建时间',
        field: 'createTime'
    }, {
        field: 'pid',
        title: '上级资源ID',
        width: 150,
        hidden: true
    }, {
        field: 'address',
        title: '地址',
        width: 120
    }, {
        field: 'action',
        title: '操作',
        width: 130,
        formatter: function (value, row, index) {
            var str = '';
            // <@shiro.hasPermission name="/organization/edit">
            str += `<a href="javascript:void(0)" class="organization-easyui-linkbutton-edit" data-options="plain:true,iconCls:\'fi-pencil icon-blue\'" onclick="editOrganizationFun(${row.id});" >编辑</a>`
            // </@shiro.hasPermission>
            // <@shiro.hasPermission name="/organization/delete">
            str += '&nbsp;&nbsp;|&nbsp;&nbsp;';
            str += `<a href="javascript:void(0)" class="organization-easyui-linkbutton-del" data-options="plain:true,iconCls:\'fi-x icon-red\'" onclick="deleteOrganizationFun(${row.id});" >删除</a>`
            // </@shiro.hasPermission>
            return str;
        }
    }]],
    onLoadSuccess: function (data) {
        $('.organization-easyui-linkbutton-edit').linkbutton({ text: '编辑' });
        $('.organization-easyui-linkbutton-del').linkbutton({ text: '删除' });
    },
    toolbar: '#orgToolbar'
};


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
            <div class="content-wrapper">
                <Sidebar data={{ menu: menu }} />
                <div class="content" id="content">
                    {/* <Table data={data}></Table> */}
                    <TreeTable data={treeTableData} datagrid={datagrid}></TreeTable>
                    <Content></Content>
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