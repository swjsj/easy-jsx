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
    gitIcon(item){
        if(item.icon){
            return(
                <Icon type={item.icon} />
            )
        }else{
            return null
        }
    }
    isVisiableItem(item) {
        return item.state == "open"
    }

    click(item,event){
        var target = $(event.currentTarget);
        var parent = target.parent();
        if(parent.hasClass('menu-open')){
            //target.next().addClass('hide');
            target.find('.pull-right-container>i').removeClass('fa-angle-down').addClass('fa-angle-left')
            parent.removeClass('menu-open');

            target.next().slideUp();
        }else{
            target.next().removeClass('hide')
            target.find('.pull-right-container>i').removeClass('fa-angle-left').addClass('fa-angle-down')
            parent.addClass('menu-open');

            parent.siblings().removeClass("menu-open").find(".treeview-menu").slideUp();
            parent.siblings().find('.pull-right-container>i').removeClass('fa-angle-down').addClass('fa-angle-left')
            target.next().slideDown();
            parent.addClass("active").siblings().removeClass("active");
        }
        parent.find("li").removeClass("active");
        if(item.children){

        }else{
            event.stopPropagation();
            // this.props.onClick(item)
            util.openContentPage( $('#content'),item.attributes,item.openMode,item.frameStyle)
        }
    }
    getTreeItemView(item) {
        var view = <li className={"treeview " + (this.isVisiableItem(item) ? "menu-open" : '')}>
            <a onClick={this.click.bind(this,item)} style="user-select: none;">
                {this.gitIcon(item)}
                <span>{item.text}</span>
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
                <div className="sidebar-bg"></div>
                <ul className="sidebar-menu tree" data-widget="tree">
                    {this.getTreeView()}
                </ul>
            </section>
        )
    }
}
