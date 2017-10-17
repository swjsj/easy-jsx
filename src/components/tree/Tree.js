import { Component, h } from 'preact'
import Icon from '../icon/Icon'

export default class Tree extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: null,
            switch: {},
            openIcon: 'plus-square-o',
            closeIcon: 'minus-square-o'
        }
    }
    clone(obj) {
        if (null == obj || "object" != typeof obj) return obj;
        if (obj instanceof Date) {
            let copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
        if (obj instanceof Array) {
            let copy = [];
            for (let i = 0; i < obj.length; ++i) {
                copy[i] = this.clone(obj[i]);
            }
            return copy;
        }
        if (obj instanceof Object) {
            let copy = {};
            for (let attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.clone(obj[attr]);
            }
            return copy;
        }
        throw new Error("Unable to copy obj! Its type isn't supported.");
    }
    
    getTreeView() {
        var viewList = this.state.menu.map((item) => {
            return this.getTreeItemView(item)
        })
        return viewList;
    }

    listTree(data) {
        var list = this.clone(data)
        var idMap = {};  //id:[]
        var treeList = [];
        let switchState = this.state.switch;
        if (list instanceof Array) {
            for (var i = 0; i < list.length; i++) {
                idMap[list[i].id] = list[i];
                switchState[list[i].id] = list[i].state
            }
        } else {
            for (var i in list.length) {
                idMap[i.id] = i;
                switchState[i.id] = i.state
            }
        }
        this.setState({
            switch: switchState
        })
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

    getTreeViewMenu(item) {
        if (!item.children) {
            return
        }
        if (this.state.switch[item.id] == 'open') {
            return (
                <ul className={`treeview-menu `} style={{ display: 'block' }}>
                    {item.children && item.children.map((item) => { return this.getTreeItemView(item) })}
                </ul>
            )
        } else {
            return null
        }
    }

    getTreeItemView(item) {
        let className = this.state.switch[item.id] == 'open' ? 'menu-open' : ''
        return (
            <li className={`treeview ${className}`}>
                <div className="treeview-label">
                    {this.getIcon(item)}
                    <a onClick={this.click.bind(this, item)}>
                        {item.icon}
                        {item.text}
                        {this.getAngle(item)}
                    </a>
                </div>
                {this.getTreeViewMenu(item)}
            </li>
        )
    }
    getIcon(item) {
        if (!item.children) {
            return
        }
        if (this.props.type) {
            let iconType;
            if (this.state.switch[item.id] == 'open') {
                iconType = this.state.closeIcon
            } else {
                iconType = this.state.openIcon
            }
            return <Icon type={iconType} onClick={this.treeClick.bind(this, item)} />
        } else {
            return null
        }
    }

    treeClick(item, event) {
        var target = $(event.currentTarget);
        let switchState = this.state.switch;
        if (this.state.switch[item.id] == 'open') {
            this.state.switch[item.id] = 'close'
        } else {
            this.state.switch[item.id] = 'open'
            var parent = target.parents(".treeview");
            parent.addClass('menu-open');
        }
        this.setState({
            switch: switchState
        })
    }

    click(item, event) {
        if (this.props.type) {
            this.props.onSelect(item, event)
        } else {
            if (item.children) {
                this.treeClick(item, event)
            } else {
                event.stopPropagation()
                if (item.openMode == "ajax") {
                    $.get(item.attributes, function (res) {
                        $('#content').html(res)
                    })
                }
            }
        }
    }
    componentWillMount() {
        this.setState({
            menu: this.listTree(this.props.data)
        })
    }
    render() {
        return (
            <section className={this.props.type ? this.props.type : `sidebar`}>
                <ul className="sidebar-menu tree" data-widget="tree">
                    {this.getTreeView()}
                </ul>
            </section>
        )
    }
}
