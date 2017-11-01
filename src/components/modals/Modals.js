import { Component, h } from 'preact'

export default class Modals extends Component {
    getFooter() {
        if (this.props.dismiss || this.props.confirm) {
            return (
                <div class="modal-footer">
                    {this.props.dismiss ? this.props.dismiss : null}
                    {this.props.confirm ? this.props.confirm : null}
                </div>
            )
        }
    }
    render() {
        let type = "default"
        if (this.props.type) {
            type = this.props.type
        }
        let defaultClass = `modal fade`
        defaultClass = `${defaultClass} modal-${type}`
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <div {...this.props} className={defaultClass}>
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
                        {this.getFooter()}
                    </div>
                </div>
            </div>
        )
    }
}
