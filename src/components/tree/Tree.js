import { Component, h } from 'preact'
import Icon from '../icon/Icon'

export default class Tree extends Component {

    getTreeView() {
        var menu = this.props.data.menu;
        menu = this.list2tree(menu);
        var viewList = menu.map((item) => { return this.getTreeItemView(item) })
        return viewList;
    }

    list2tree(list) {
        var idMap = {};  //id:[]
        var treeList = [];
        for (var item of list) {
            idMap[item.id] = item;
        }
        for (var id in idMap) {
            var item = idMap[id];
            if (item.pid) {
                var parent = idMap[item.pid]
                parent.children = parent.children ? parent.children.concat(item) : [item];
                item.parent = parent;
            } else {
                treeList.push(item)
            }
        }
        return treeList;
    }

    getAngle(option) {
        if (option.children) {
            return (
                <span className="pull-right-container">
                    <Icon type="angle-left" />
                </span>
            )
        }
    }

    getTreeItemView(item) {
        var view = <li className={`treeview ${item.state == 'open' ? 'menu-open' : ''}`}>
            <a href={item.link}>
                {item.icon}
                {item.text}
                {this.getAngle(item)}
            </a>
            <ul className={`treeview-menu `} style={`display:${!item.parent || item.parent.state == 'open' ? 'block' : 'none'};`}>
                {item.children && item.children.map((item) => { return this.getTreeItemView(item) })}
            </ul>
        </li>
        return view;
    }

    render() {
        return (
            <section className="sidebar">
                <ul className="sidebar-menu tree" data-widget="tree">
                    {this.getTreeView()}
                </ul>
            </section>
        )
    }
}
