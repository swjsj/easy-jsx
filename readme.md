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