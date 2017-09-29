import { Component, h } from 'preact'
import Icon from '../icon/Icon'

export default class Sidebar extends Component {

    getTreeView() {
        var menu = this.props.data.menu;
        menu = this.list2tree(menu);
        
        return menu.map((item) => {
            // if (item.header) {
            //     return (
            //         <li className="header">{item.header}</li>
            //     )
            // }
            // if (item.link) {
            //     return (
            //         <li>
            //             <a href={item.link}>
            //                 <span>{item.treeview}</span>
            //             </a>
            //         </li>
            //     )
            // } else {
                return (
                    <li className={this.getClassName(item)}>
                        <a href="               #">
                            <span>{item.text}</span>
                            {this.getAngle(item)}
                        </a>
                        {item.content ? this.getContent(item) : null}
                    </li>
                )
           // }
        })
    }


    list2tree(list){
        var idMap = {};  //id:[]
        var treeList = [];
        for(var item of list){
            idMap[item.id] = item;
        }
        for(var id in idMap){
            var item = idMap[id];
            if(item.pid){
                var parent = idMap[item.pid]
                parent.content = parent.content ? parent.content.concat(item) : [item];
                item.parent = parent;
            }else{
                treeList.push(item)
            }
        }
        return treeList;
    }

    getClassName(option) {
        var classStr = '';
        if(option.content){
            classStr += 'treeview';
            if(option.state == "open"){
                classStr += ' menu-open'
            }
        }
        return classStr
    }

    getDisplaySytle(item){
        if(!item.parent || item.parent.state == "open"){
            return "display:block;"
        }else{
            return "display:none;"
        }
    }
    getAngle(option) {
        if (option.content) {
            return (
                <span className="pull-right-container">
                    <Icon type="angle-left" />
                </span>
            )
        }
    }

    // getTreeStateClass(item){
    //     return item.state == "open" ? "treeview-menu menu-open" :'treeview-menu '
    // }
    getContent(option) {
        return (
            <ul className="treeview-menu" style={this.getDisplaySytle(option)}>
                {
                    option.content.map((item) => {
                        return (
                            <li className={this.getClassName(item)}>
                                <a href={item.link}>
                                    {item.text}
                                    {this.getAngle(item)}
                                </a>
                                {item.content ? this.getContent(item) : null}
                            </li>
                        )
                    })
                }
            </ul>
        )
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
