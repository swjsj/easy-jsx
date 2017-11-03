## 

1. 轻量： 只需引入一个js文件 无需复杂的打包配置

2. 语义化、模块化： 用jsx语法推进 Web Component

3. 重交互体验： 让团队探索和思考前端的交互体验问题，本身就是本项目的一个重要目标 

  主要参考资料：
    
    * Bootstrap / MaterailUI / 阿里Antd借鉴设计原则
    *《微交互设计》
    * 团队的知乎专栏：[司空不见贯](https://zhuanlan.zhihu.com/skbjg)


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