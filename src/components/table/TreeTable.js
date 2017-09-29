import { Component, h } from 'preact'
import './table.less'
export default class TreeTable extends Component {
    render() {
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
                            <th data-field="state" data-checkbox="true"></th>
                            <th data-field="id">ID</th>
                            <th data-field="name">Item Name</th>
                            <th data-field="price">Item Price</th>
                        </tr>
                    </thead>

                    <tbody>

                    </tbody>
                </table>

            </div>
        )
    }
}