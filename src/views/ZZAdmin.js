
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
            sidebar={<Sidebar data={[treeview]} />}
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