import { Component, h } from 'preact'
import './table.less'
import * as util from '../util'

export default class Table extends Component {


    componentDidMount() {
        this.nowPage = this.props.nowPage;
        var { datagrid } = { ...this.props };
        this.pageNumber = datagrid.pageNumber || 1;
        this.loadData();
    }

    loadData() {
        var { datagrid } = { ...this.props };
        var { pageSize, sort, sortOrder,dataField } = { ...datagrid };
        var url = util.getReqUrl(datagrid.url)
        url += `?pageNumber=${this.pageNumber}&pageSize=${pageSize}&sort=${sort}&sortOrder=${sortOrder}`
        $.get(url, (res) => {
            var data = res;
            if(dataField){
                data = res[dataField]
            }
            this.setState({
                data: data
            })
        })
    }

    openPage(pageNumber){
        if(pageNumber != this.pageNumber){
            this.pageNumber = pageNumber;
            this.loadData();
        }
    }


    getTrView(item, padding) {
        var { datagrid } = { ...this.props };

        var columns = datagrid.columns[0];
        //debugger

        var tds = columns.map((col) => {
            var html = col.formatter ? col.formatter(item[col.field], item) : item[col.field]
            var style = "width:" + col.width + "px;"
            var eventHander = {};
            return <td {...eventHander} style={style} dangerouslySetInnerHTML={{ __html: html }}> </td>
        })
        return <tr>{tds}</tr>
    }


    getTBody() {
        var data = this.state.data || [];

        return data.map((item) => {
            return this.getTrView(item, 0)
        })
    }

    render() {
        var { datagrid } = { ...this.props };
        var columns = datagrid.columns[0];
        var scope = this;
        var { pagesList } = { ...datagrid };
        return (
            <div>

                <table id="table">
                    <thead>
                        <tr>
                            {/* <th data-field="state" data-checkbox="true"
                                data-formatter={(value, row, index) => {

                                    if (index === 2) {
                                        return {
                                            disabled: true
                                        };
                                    }
                                    if (index === 5) {
                                        return {
                                            disabled: true,
                                            checked: true
                                        }
                                    }
                                    return value;
                                }}></th> */}

                            {
                                columns.map((col) => {
                                    return <th data-field={col.field} style={"width:" + col.width + "px;"}
                                        data-formatter={col.formatter}
                                    >{col.title}</th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {this.getTBody()}
                    </tbody>
                </table>
                <div class="fixed-table-pagination" style="display: block;">
                   
                    <div class="pull-right pagination">
                        <ul class="pagination">
                            <li class="page-pre">
                                <a href="#">‹</a>
                            </li>
                            {
                                pagesList.map((page) => {
                                    return <li class={"page-number" + this.pageNumber == page ? "active" : ""}>
                                        <a onClick={()=>{this.openPage(page)}}>{page}</a>
                                    </li>
                                })
                            }
                            <li class="page-next">
                                <a href="#">›</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}