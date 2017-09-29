import { Component, h } from 'preact'

export default class Modals extends Component {
    render() {
        let ModalsClass = `modal fade`
        let type = "default"
        if (this.props.type) {
            type = this.props.type
        }
        ModalsClass = `${ModalsClass} modal-${type}`
        return (
            <div class={ModalsClass} id={this.props.id}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span></button>
                            <h4 class="modal-title">{this.props.title}</h4>
                        </div>
                        <div class="modal-body">
                            {this.props.children}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={this.props.onClick}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
