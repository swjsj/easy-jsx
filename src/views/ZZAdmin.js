
import ZZStyleLayout from '../components/zzstyle/ZZStyleLayout'
import Table from '../components/table/Table'



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

export class ZZAdmin extends Component {

    render() {
        return <ZZStyleLayout
            topbar={
                <Topbar logo={{
                    img: 'tmp/google.png',
                    text: '司空管理中心'
                }}
                user={{
                    username: '二花爱猫咪123',
                    img: 'tmp/photo.jpg'
                }} />
            }
            sidebar={<Sidebar data={{menu:menu}} />}
        >
                <Table data={data}></Table>
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