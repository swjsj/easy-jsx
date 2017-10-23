import { Component, h } from 'preact'

export default class Alert extends Component {
    render() {
        let defaultClass = `alert alert-dismissible`
        if(this.props.className){
            defaultClass=`${defaultClass} ${this.props.className}`
        }
        if(this.props.type){
            defaultClass=`${defaultClass} alert-${this.props.type}`
        }
        return (
            <div {...this.props} className={defaultClass}>
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                <h4>
                    {this.props.icon ? this.props.icon : null}
                    {this.props.title}
                </h4>
                {this.props.children}
            </div>
        )
    }
}
