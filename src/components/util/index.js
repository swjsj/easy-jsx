import * as parser from './parser'
//

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


export function renderJsx(jsxStr,elem, scope = {}) {

    var evaled = parser.evalJSX(jsxStr, {
        ...EasyJSX.components,
        ...scope
    })
    preact.render(evaled, elem);
}


export function openJsx($content,url){
    $.get(url,function(res){
        $content.html('')
        var warp = document.createElement('div'); 
        renderJsx(res,warp)
        $(warp).appendTo($content)
    })
}

export function openHtml($content,url){
    $.get(url,function(res){
        $content.html(res)
    })
}

export function openIframe($content,url){
    var frame = $(document.createElement('iframe')).attr('src',url)
    for(var i in item.frameStyle){
        frame.css(i,item.frameStyle[i]);
    }
    $content.html('').append(frame);
}