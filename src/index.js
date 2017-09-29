import {render,h} from 'preact';
import './index.sass';
export var preact = require('preact')
export var parser = require('./parser')

export var config = require('./config').default


import _components from './components'
// import jQuery from 'jquery'
export var components = {
    //AdminLTE:require('./views/AdminLTE').default,
    ZZAdmin:require('./views/ZZAdmin').default,
    ..._components
}

/**
 * 渲染页面中的jsx元素 
 * 
 * @export
 * @param {HTMLElement} jsxScriptArray 需要渲染的jsx script对象数组
 */
export function renderJSXScriptElements(jsxScriptArray) {
    window.preact = preact;
    parser.evalJSX.globalNs = 'preact';
    var tArray = jsxScriptArray;
    for (var i = 0, len = tArray.length; i < len; i++) {
        var template = tArray[i];
        var str = template.innerHTML;       
        var evaled = parser.evalJSX(str,components)
        var warp = document.createElement('div'); 
        warp.className = "rendered-jsx";
        template.after(warp);
        preact.render(evaled, warp);
    }
}

let elem, App;
function init() {
	App = components.ZZAdmin
	elem = render(App, document.getElementById('root'), elem);
} 

 

if(location.search.indexOf('show_components') > -1){
    init();    
}
 