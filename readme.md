## 查看所有组件

```sh
git clone http://gitlab.skong.com/npm/easy-jsx.git
cd easy-jsx
npm install
npm run build
npm run watch
```

然后在浏览器打开
http://localhost:3000/?show_components

## 编译发布

修改publish.sh里的target为你项目的静态目录地址然后运行

```sh
npm run build
```


## 最终使用

在后台模板里输出jsx 例如：

```html
<script class="jsx" type="text/html">
	<Home />
</script>
```

并添加渲染代码
```html
<script src="/static/easy-jsx/index.js"></script>
<script>
    EasyJSX.renderJSXScriptElements(document.getElementsByClassName('jsx'))
</script>
```





组件说明
-------------

**日期选择器：DatePicker**

```html
<DatePicker id="datepicker" />
```
> 注：标签中id命名必须为“*datepicker*”。







**下拉框InputGroup**

> 使用

``` html
<InputGroup beforeBtn={data}  />
```

> 参数beforeBtn格式为：

```json
let data = { text: '这个是下拉按钮', 
    type: 'warning', 
    content: [ 
        { link: 'www.baidu.com', text: '第一个' }, 
        { link: 'www.baidu.com', text: '第二个' }, 
        { link: 'www.baidu.com', text: '第三个' }, 
        { link: 'www.baidu.com', text: '第四个' } 
    ]
}

```







**树形结构的下拉框TreeSelect**

> 使用

``` html
<TreeSelect data={treeSelectData} />
```

> 属性data数据格式如下：

```json
let treeSelectData = [{
        "id": 1,
        "text": "一级",
        "state": "open",
        "checked": false,
        "attributes": null,
        "iconCls": null,
        "pid": null,
        "openMode": null
    }, {
        "id": 2,
        "text": "二级",
        "state": "open",
        "checked": false,
        "attributes": null,
        "iconCls": null,
        "pid": 1,
        "openMode": null
    }
]

```







**左侧菜单组件：Sidebar**

>使用

```html
<Sidebar data={{ menu: menu2 }} onClick={(item)=>{changeTab(item)}} />
```
> 属性data数据格式如下：

```json
var menu2 = [
    {
        "text": "统计组件",
        "state": "close",
        "checked": false,
        "attributes": "views/widgets.html",
        "iconCls": "fi-folder",
        "openMode": "ajax",
        "icon": "th",
    },
    {
        "text": "Form表单组件",
        "state": "close",
        "checked": false,
        "attributes": "",
        "iconCls": "fi-folder",
        "openMode": "",
        "icon": "edit",
        children: [{
                "text": "常用元素",
                "state": "open",
                "checked": false,
                "attributes": "views/form.html",
                "iconCls": "fi-folder",
                "openMode": "ajax-jsx"
            },{
                "text": "富文本编辑器",
                "state": "open",
                "checked": false,
                "attributes": "views/codebox.html",
                "iconCls": "fi-folder",
                "openMode": "ajax"
            }
        ]
    }
]

```







**头部导航：Topbar**

>使用

```html
<Topbar logo={{ img: './static/tmp/AdminLTE.png', text: '' }}  
    user={{ username: '二花爱猫咪123', img: './static/tmp/photo.jpg' }}/>
```





**树形结构：Tree**

>使用

```html
<Tree data={treeData} />
```

> 属性treeData数据格式如下：

```json
let treeData = [
    {
        "id": 1,
        "text": "订单管理",
        "state": "close",
        "checked": false,
        "attributes": null,
        "iconCls": null,
        "pid": null,
        "openMode": null
    }, {
        "id": 2,
        "text": "订单管理二级",
        "state": "close",
        "checked": false,
        "attributes": null,
        "iconCls": null,
        "pid": 1,
        "openMode": null
    }, {
        "id": 3,
        "text": "系统管理",
        "state": "close",
        "checked": false,
        "attributes": null,
        "iconCls": null,
        "pid": null,
        "openMode": null
    }, {
        "id": 4,
        "text": "系统管理二级",
        "state": "close",
        "checked": false,
        "attributes": null,
        "iconCls": null,
        "pid": 3,
        "openMode": null
    }
]

```

