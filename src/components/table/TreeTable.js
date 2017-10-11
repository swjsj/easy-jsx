import { Component, h } from 'preact'
import * as util from '../util'
import './table.less'
export default class TreeTable extends Component {

    componentDidMount() {
        //debugger
    }



    render() {
        var { data, datagrid } = { ...this.props };
        var columns = datagrid.columns[0];
        var map = this.map = util.list2map(data)
        var tree = this.tree = util.list2tree(data)
        var itemList = this.getLeafView(tree);
        return (
            <div>
                <div id="toolbar">
                    <div class="form-inline" role="form">
                        <div class="form-group">
                            <span>Offset: </span>
                            <input name="offset" class="form-control" type="number" value="0" style={{ width: '70px' }} />
                        </div>
                        <div class="form-group">
                            <span>Limit: </span>
                            <input name="limit" class="form-control" type="number" value="5" style={{ width: '70px', marginLeft: "20px" }} />
                        </div>

                        <button id="ok" type="submit" class="btn btn-default" ref={(ok) => this.ok = ok}>OK</button>
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            {
                                columns.map((col) => {
                                    return <th style={"width:" + col.width + "px;"}>{col.title}</th>
                                })
                            }
                        </tr>
                    </thead>

                    <tbody>
                        {itemList}
                    </tbody>
                </table>

            </div>
        )
    }

    isVisiableItem(item) {
        return !item.parent || item.parent.opened
    }

    getTrClassStr(item) {
        var str = ''
        if (!this.isVisiableItem(item)) {
            str += " hide"
        }
        return str;
    }

    toggle(item) {
        var originItem = this.map[item.id];
        originItem.opened = item.opened ? 0 : 1;
        this.forceUpdate();
    }

    getTrView(item, padding) {
        var { datagrid } = { ...this.props };
        var columns = datagrid.columns[0];
        //debugger

        var tds = columns.map((col) => {
            var html = col.formatter ? col.formatter(item[col.field], item) : item[col.field]
            var style = "width:" + col.width + "px;"
            var eventHander = {};

            if (col.field == datagrid.treeField) {
                style += "padding-left:" + padding * 10 + "px;cursor: pointer;"
                eventHander.onClick = this.toggle.bind(this, item)
            }

            return <td class={this.getTrClassStr(item)} {...eventHander} style={style} dangerouslySetInnerHTML={{ __html: html }}> </td>
        })
        return <tr>
            {/* <td class={this.getTrClassStr(item)}
                style={"padding-left:" + padding * 10 + "px;cursor: pointer;"}
                onClick={this.toggle.bind(this, item)}
            >
                {item.text} 
            </td>
            <td>
                {item.attributes}
            </td>
            <td>
                {item.openMode}
            </td>
            <td>
                {item.state}
            </td>
            <td>
                {item.iconCls}
            </td> */}
            {
                tds
            }
        </tr>
    }

    getLeafView(leaf, trList = [], padding = 0) {
        if (leaf instanceof Array) {
            leaf.reduce((acc, curr) => this.getLeafView(curr, trList, padding + 1), 0);
        } else if (leaf && util.isLeaf(leaf)) {
            trList.push(this.getTrView(leaf, padding))
            this.getLeafView(leaf.children, trList, padding + 1)
        }
        return trList;
    }
}