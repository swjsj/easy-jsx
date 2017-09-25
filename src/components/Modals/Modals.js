import { Component, h } from 'preact'

export default class Modals extends Component {
    render() {
        let ModalsClass = `fa fa-fw fa-${this.props.type} ${this.props.colorType}`
        return (
            <div class="modal fade" id="modal-default">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 class="modal-title">Default Modal</h4>
                        </div>
                        <div class="modal-body">
                            <p>One fine body…</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
