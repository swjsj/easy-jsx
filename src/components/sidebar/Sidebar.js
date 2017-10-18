import { Component, h } from 'preact'
import Icon from '../icon/Icon'
import * as util from '../util'
export default class Sidebar extends Component {

    getTreeView() {
        
        var menu = this.props.data.menu;
        var menuTree = null;
        if(menu && (menu[0].id || menu[0].pid)){
            this.map = util.list2map(menu)
            menuTree = util.list2tree(menu);
        }else{
            this.map = util.tree2map(menu)
            menuTree = menu
        }
     
        var viewList = menuTree.map((item) => { return this.getTreeItemView(item) })
        return viewList;
    }
    getAngle(item) {
        if (item.children) {
            return (
                <span className="pull-right-container">
                    <Icon type={this.isVisiableItem(item)?"angle-down": "angle-left"} />
                </span>
            )
        }
    }

    isVisiableItem(item) {
        return item.state == "open"
    }

    click(item,event){
        var target = $(event.currentTarget);
        if(item.children){
            var parent = target.parent();
            if(parent.hasClass('menu-open')){
                target.next().addClass('hide');
                target.find('i').removeClass('fa-angle-down').addClass('fa-angle-left')
                
                parent.removeClass('menu-open');
            }else{
                target.next().removeClass('hide')
                target.find('i').removeClass('fa-angle-left').addClass('fa-angle-down')
                
                parent.addClass('menu-open');
            }
        }else{
            event.stopPropagation();
            var $content = $('#content')
            console.log(item.attributes)
            if(item.openMode == "ajax"){
                util.openHtml($content,item.attributes)
            }
            if(item.openMode == "ajax-jsx"){
                util.openJsx($content,item.attributes);
            }
            if(item.openMode == "iframe"){
               util.openIframe($content,item.attributes)
            }
        }
    }

    getTreeItemView(item) {
        var view = <li className={"treeview " + (this.isVisiableItem(item) ? "menu-open" : '')}>
            <a onClick={this.click.bind(this,item)} style="user-select: none;">
                {item.text}
                {this.getAngle(item)}
            </a>
            <ul className={"treeview-menu " + (this.isVisiableItem(item) ? ' ':' hide')}
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
