import { Component, h } from 'preact'
import './table.less'
import * as util from '../util'

export default class Table extends Component {


    componentDidMount() {
        this.nowPage = this.props.nowPage;
        var { datagrid } = { ...this.props };
        this.openPage( datagrid.pageNumber || 1);
    }

    loadData() {
        var { datagrid } = { ...this.props };
        var { pageSize, sort, sortOrder, dataField } = { ...datagrid };
        var url = util.getReqUrl(datagrid.url)
        url += `?pageNumber=${this.pageNumber}&pageSize=${pageSize}&sort=${sort}&sortOrder=${sortOrder}`
        $.get(url, (res) => {
            var data = res;
            if (dataField) {
                data = res[dataField]
            }
            this.setState({
                data: data
            })
        })
    }

    openPage(pageNumber) {
        if (pageNumber != this.pageNumber) {
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

    getPagination() {

        var minPageNumber = 1;
        var maxPageNumber = null;

        var pagesList = [];
        var total = this.props.datagrid.total;
        var pageSize = this.props.datagrid.pageSize;
        var itemCount = 0;
        var pageCount = 1;
        while(itemCount < total){
            itemCount += pageSize;
            pagesList.push(pageCount);
            maxPageNumber = pageCount
            
            pageCount += 1;
        }
        //console.log(pagesList)
        return <div class="pull-right pagination">
            <ul class="pagination">
                <li class="page-pre" style={{
                    display:this.pageNumber == minPageNumber ? 'none':'block'
                }}>
                    <a onClick={()=>{this.openPage(this.pageNumber - 1)}}>‹</a>
                </li>
                {
                    pagesList.map((page) => {
                        return <li class={"page-number " + (this.pageNumber*1 == page ? "active" : "")}>
                            <a onClick={() => { this.openPage(page) }}>{page}</a>
                        </li>
                    })
                }
                <li class="page-next" style={{
                    display:this.pageNumber == maxPageNumber ? 'none':'block'
                }}>
                    <a onClick={()=>{this.openPage(this.pageNumber + 1)}}>›</a>
                </li>
            </ul>
        </div>
    }

    render() {
        var { datagrid } = { ...this.props };
        var columns = datagrid.columns[0];
        var scope = this;

        return (
            <div>

                <table id="table">
                    <thead>
                        <tr>
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
                    {this.getPagination()}
                </div>
            </div>
        )
    }

}