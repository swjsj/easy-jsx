import {render,h} from 'preact';

export var preact = require('preact')
export var parser = require('./parser')
export var components = {
    Home: require('./views/pages/home').default
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
        var evaled = parser.evalJSX(template.innerHTML,components)
        var warp = document.createElement('div');
        warp.className = "rendered-jsx";
        template.after(warp);
        preact.render(evaled, warp);
    }
}

let elem, App;
function init() {
	App = require('./views').default;
	elem = render(App, document.getElementById('root'), elem);
}

init();
