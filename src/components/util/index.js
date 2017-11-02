import * as parser from './parser'


import shortid from 'shortid'

const leafTag = '_@@_EasyJSXLeaf'
export function isLeaf(tree) {
    return tree[leafTag]
}


export function list2map(list, options = { idKey: 'id' }) {
    var map = {};  //id:[]    
    var idKey = options.idKey;

    for (var i in list) {
        var item = list[i];
        map[item[idKey]] = item;
    }
    return map;
}

export function tree2map(tree, options = { idKey: 'id', pidKey: 'pid' }) {
    var pidKey = options.pidKey;
    var idKey = options.idKey;
    var map = {};
    map[tree[idKey]] = tree;
    if (tree.children) {
        tree.children.forEach(function (item) {
            map = { ...map, ...tree2map(item) }
        }, this);
    }
    return map;
}

export function list2tree(list, options = { idKey: 'id', pidKey: 'pid' }) {
    var treeList = [];
    var pidKey = options.pidKey;
    var map = {};  //id:[]    
    var idKey = options.idKey;

    for (var i in list) {
        var item = list[i];
        map[item[idKey]] = { ...item };
    }

    for (var i in map) {
        var item = map[i];
        item[leafTag] = true
        if (item.pid) {
            var parent = map[item[pidKey]]
            parent.children = parent.children ? parent.children.concat(item) : [item];
            item.parent = parent;
        } else {
            treeList.push(item)
        }
    }
    return treeList;
}


export function renderJsx(jsxStr, elem, scope = {}) {

    var evaled = parser.evalJSX(jsxStr, {
        ...EasyJSX.components,
        ...scope
    })
    preact.render(evaled, elem);
}


export function openJsx($content, url) {
    $.get(url, function (res) {
        var sourcemap = {};
        res = res.replace(/<Codebox(.*)>((.|[\r\n])*?)<\/Codebox>/gm,function(){
            var argsStr = arguments[1];
            var contentStr = arguments[2];
            var id = "codebox-" + shortid.generate();
            sourcemap[id] = contentStr;
            return `<Codebox ${argsStr} id="${id}">${contentStr}</Codebox>`
        })
        //console.log(res)
        $content.html('')
        var $warp = $('<div>');
        renderJsx(res, $warp[0])
        $warp.appendTo($content);
        ///var jsxCode = 

        for(var id in sourcemap){
            var element = $warp.find('#' + id)[0];
            element && (element.source = sourcemap[id]);
        }

        //处理codebox
        //1.解析源字符串，找出所有codebox对应源码 id 
        //2.源码和对于组件建立映射  element.id ,element.textContent
        //3.处理事件绑定(组件内自行处理)

        /**
            <div>
          	    <div className="view-box">
                <Codebox>
                    <TreeSelect data={treeSelectData} />
                </Codebox>
				</div>
                <div className="view-box">
                  <Codebox>
					<Alert icon={<Icon type="anchor" />} title="这个是标题" type="info">
						这里是正文这里是正文这里是正文这里是正文这里是正文
                    </Alert>
                  </Codebox>
				</div>
                <div className="view-box">
                <Codebox>
                    <Editor className="Editor" />
                </Codebox>
                </div>
            </div>
         */
  
    })
}



export function openHtml($content, url) {
    $.get(url, function (res) {
        $content.html(res)
    })
}

export function openIframe($content, url,style) {
    var frame = $(document.createElement('iframe')).attr('src', url)
    for (var i in style) {
        frame.css(i, style[i]);
    }
    $content.html('').append(frame);
}


export function openContentPage($content, pageUrl, openMode,style) {
    if (openMode == "ajax") {
        openHtml($content, pageUrl)
    }
    if (openMode == "ajax-jsx") {
        openJsx($content, pageUrl);
    }
    if (openMode == "iframe") {
        openIframe($content, pageUrl,style)
    }

    history.pushState(null, null, `?contentPageUrl=${pageUrl}&openMode=${openMode}`)
}


export * from './url'
export * from './config'
