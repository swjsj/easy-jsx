import { Component, h } from 'preact'

export default class Editor extends Component {

    componentDidMount() {
        let EditorClass = this.props.class
        $(function () {
            $(`.${EditorClass}`).wysihtml5()
        })
    }
    render() {
        return (
            <textarea className={this.props.class} placeholder={this.props.placeholder}></textarea>
        )
    }
}
