import { Component, h } from 'preact'

export default class Editor extends Component {

    componentDidMount() {
        let EditorClass = this.props.className
        $(function () {
            $(`.${EditorClass}`).wysihtml5()
        })
    }
    render() {
        return (
            <textarea className={this.props.className} placeholder={this.props.placeholder}></textarea>
        )
    }
}
