import JSXParser from './JSXParser'
import preact from 'preact'
import * as db from './db'
var rComponent = /^(this|[A-Z])/
var cacheFns = {}
var cacheStr = {}


export var Parser = JSXParser;
/**
 * 解析jsx
 * 
 * @export
 * @param {any} str 
 * @param {any} obj 
 * @param {any} config 
 * @returns 
 */
export function evalJSX(str, obj, config) {
    var jsx = new innerClass(str, config)

    var output = jsx.init()
    if (!obj)
        obj = {}
    if (typeof anu === 'function')
        obj.anu = anu
    var args = 'var args0 = arguments[0];'
    for (var i in obj) {
        if (i !== 'this')
            args += 'var ' + i + ' = args0["' + i + '"];'
    }
    args += 'return ' + output
    try {
        var fn
        if (cacheFns[args]) {
            fn = cacheFns[args]
        } else {
            fn = cacheFns[args] = Function(args)
        }
        // console.log('function: ', fn.toString());
        // console.log('arguments: ', [obj]);
        var a = fn.call(obj.this, obj)
        return a
    } catch (e) {
        console.error(e)
        debugger
    }

}

function innerClass(str, config) {
    config = config || {}
    config.ns = evalJSX.globalNs || config.ns || 'anu'
    this.input = str
    this.ns = config.ns
    this.type = config.type
}
innerClass.prototype = {
    init: function () {

        if (typeof JSXParser === 'function') {
            var useCache = this.input.length < 720
            if (useCache && cacheStr[this.input]) {
                return cacheStr[this.input]
            }
            var array = (new JSXParser(this.input)).parse()


            var evalString = this.genChildren([array])
            if (useCache) {
                return cacheStr[this.input] = evalString
            }
            return evalString
        } else {
            throw 'need JSXParser https://github.com/RubyLouvre/jsx-parser'
        }

    },
    genTag: function (el) {
        var children = this.genChildren(el.children, el)
        var ns = this.ns
        var type = rComponent.test(el.type) ? el.type : JSON.stringify(el.type)
        return ns + '.createElement(' + type +
            ',' + this.genProps(el.props, el) +
            ',' + children + ')'
    },
    genProps: function (props, el) {

        if (!props && !el.spreadAttribute) {
            return 'null'
        }
        var ret = '{'
        for (var i in props) {
            ret += JSON.stringify(i) + ':' + this.genPropValue(props[i]) + ',\n'
        }
        ret = ret.replace(/\,\n$/, '') + '}'
        if (el.spreadAttribute) {
            return 'Object.assign({},' + el.spreadAttribute + ',' + ret + ')'
        }
        return ret
    },
    genPropValue: function (val) {
        if (typeof val === 'string') {
            return JSON.stringify(val)
        }
        if (val) {
            if (Array.isArray(val.nodeValue)) {
                return this.genChildren(val.nodeValue)
            }
            if (val) {
                return val.nodeValue
            }
        }
    },
    genChildren: function (children, obj, join) {
        if (obj) {

            if (obj.isVoidTag || !obj.children.length) {
                return 'null'
            }
        }
        var ret = []
        for (var i = 0, el; el = children[i++];) {
            if (el.type === '#jsx') {
                if (Array.isArray(el.nodeValue)) {
                    ret[ret.length] = this.genChildren(el.nodeValue, null, ' ')
                } else {
                    ret[ret.length] = el.nodeValue
                }
            } else if (el.type === '#text') {
                ret[ret.length] = JSON.stringify(el.nodeValue)
            } else if(el.type === "script"){
                var scriptStr = el.children[0].nodeValue;
                if(el.props.execute == "lazy"){
                    var lazyScripts = db.get('lazyScripts') || [];
                    lazyScripts.push(scriptStr);
                    db.set('lazyScripts',lazyScripts);
                }else{
                    window.eval(scriptStr)
                }
            }else if (el) {
                ret[ret.length] = this.genTag(el)
            }
        }
        return ret.join(join || ',')
    }
}

