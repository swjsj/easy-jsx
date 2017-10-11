import { Component, h } from 'preact'
import Icon from '../icon/Icon'
import * as util from '../util'
export default class Sidebar extends Component {

    getTreeView() {
        var menu = this.props.data.menu;
        menu = util.list2tree(menu);
        var viewList = menu.map((item) => { return this.getTreeItemView(item) })
        return viewList;
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
        var view = <li className={"treeview " + (item.state == "open" ? "menu-open" : '')}>
            <a href={item.link}>
                {item.text}
                {this.getAngle(item)}
            </a>
            <ul className={"treeview-menu "}
                style={"display:" + ((!item.parent || item.parent.state == "open") ? "block;" : "none;")}
            >
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
