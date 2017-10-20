import { Component, h } from 'preact'

export default class Editor extends Component {

    componentDidMount() {
        $(function () {
            $(`.textarea`).wysihtml5()
        })
    }
    
    render() {
        let defaultClass = `textarea`
        if (this.props.className) {
            defaultClass = `${defaultClass} ${this.props.className}`
        }
        return (
            <textarea {...this.props} className={defaultClass}></textarea>
        )
    }
}
