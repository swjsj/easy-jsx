import { Component, h } from 'preact'

import './widgets.less'

export default class InfoPalette extends Component {

    getMoreLink() {
        if (this.props.moreInfo) {
            return (
                <a href="#" class="small-box-footer">
                    {this.props.moreInfo}
                    {this.props.miniIcon ? this.props.miniIcon : null}
                </a>
            )
        } else {
            return null
        }
    }

    render() {

        let InfoboxClass = `small-box`
        this.props.type ? InfoboxClass = `${InfoboxClass} ${this.props.type}` : null
        this.props.className ? InfoboxClass = `${InfoboxClass} ${this.props.className}` : null

        return (
            <div class={InfoboxClass}>
                <div class="inner">
                    <h3>{this.props.number}</h3>
                    <p>{this.props.title}</p>
                </div>
                <div class="icon">
                    {this.props.icon ? this.props.icon : null}
                </div>
                {this.getMoreLink()}
            </div>
        )

    }
}
