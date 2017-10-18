import { Component, h } from 'preact'

import './widgets.less'

export default class InfoPalette extends Component {

    getProgress() {
        if (this.props.progress) {
            return (
                <div class="progress">
                    <div class="progress-bar" style={`width: ${this.props.progress * 100}%`}></div>
                </div>
            )
        } else {
            return null
        }
    }

    getDescription() {
        if (this.props.description) {
            return (
                <span class="progress-description"> {this.props.description} </span>
            )
        } else {
            return null
        }
    }

    render() {

        let InfoboxClass = `info-box`
        let InfoboxIconClass = `info-box-icon`
        this.props.type ? InfoboxClass = `${InfoboxClass} ${this.props.type}` : null
        this.props.iconBg ? InfoboxIconClass = `${InfoboxIconClass} ${this.props.iconBg}` : null
        this.props.className ? InfoboxClass = `${InfoboxClass} ${this.props.className}` : null

        if (this.props.progress > 1) {
            this.props.progress = 1
        }

        return (
            <div class={InfoboxClass}>
                <span class={InfoboxIconClass}>
                    {this.props.icon ? this.props.icon : null}
                </span>
                <div class="info-box-content">
                    <span class="info-box-text">{this.props.title}</span>
                    <span class="info-box-number">{this.props.number}</span>
                    {this.getProgress()}
                    {this.getDescription()}
                </div>
            </div>
        )
        
    }
}
