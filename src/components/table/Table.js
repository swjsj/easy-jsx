import { Component, h } from 'preact'
import './table.less'
export default class Table extends Component {



    componentDidMount() {

        var {datagrid} = {...this.props}; 
        var url = util.getReqUrl(datagrid.url)
        $.get(url,(res)=>{
            // this.setState({
            //     data:res
            // })

            var $table = $(this.table);
            $table.bootstrapTable({ data: res });
            var bsTable = $table.data('bootstrap.table')
            bsTable.hideLoading();
            // $(this.ok).click(function () {
            //     $table.bootstrapTable('refresh');
            //     bsTable = $table.data('bootstrap.table')
            // });
    
        })
    }

    render() {
        var { data, datagrid } = { ...this.props };
        var columns = datagrid.columns[0];
        return (
            <div>
                {/* <div id="toolbar">
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
                </div> */}

                <table id="table"
                    data-toggle="table"
                    data-toolbar="#toolbar"
                    data-show-refresh="true"
                    data-show-toggle="true"
                    data-show-columns="true"
                    data-pagination="true"
                    data-side-pagination="server"
                    data-page-list="[5, 10, 20, 50, 100, 200]"
                    ref={(table) => { this.table = table }}
                    data-search="true"
                    data-total-rows={100}
                    data-page-size={10}
                    data-silent="true"
                    data-click-to-select="true"
                >
                    <thead>
                        <tr>
                            <th data-field="state" data-checkbox="true"
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
                                }}></th>
                   
                            {
                                columns.map((col) => {
                                    return <th data-field={col.field} style={"width:" + col.width + "px;"} 
                                    data-formatter={col.formatter}
                                    >{col.title}</th>
                                })
                            }
                        </tr>
                    </thead>
                </table>

            </div>
        )
    }

}