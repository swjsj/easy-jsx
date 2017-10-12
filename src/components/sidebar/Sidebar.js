import { Component, h } from 'preact'
import Icon from '../icon/Icon'
import * as util from '../util'
export default class Sidebar extends Component {

    getTreeView() {
        
        var menu = this.props.data.menu;
        var map = this.map = util.list2map(menu)
        var menuTree = util.list2tree(menu);
        var viewList = menuTree.map((item) => { return this.getTreeItemView(item) })
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

    isVisiableItem(item) {
        return item.state == "open"
    }

    getTrClassStr(item) {
        var str = ''
        if (!this.isVisiableItem(item)) {
            str += " hide"
        }
        console.log(str)
        return str;
    }

    click(item,event){
        var target = $(event.currentTarget);
        if(item.children){
            var parent = target.parent();
            if(parent.hasClass('menu-open')){
                target.next().hide();
                parent.removeClass('menu-open');
            }else{
                target.next().show();
                parent.addClass('menu-open');
            }
        }else{
            event.stopPropagation()
            console.log(item.attributes)
            if(item.openMode == "ajax"){
                debugger
                $.get(item.attributes,function(res){
                    $('#content').html(res)
                })
            }
        }
    }

    getTreeItemView(item) {
        var view = <li className={"treeview " + (item.state == "open" ? "menu-open" : '')}>
            <a onClick={this.click.bind(this,item)}>
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
