import { Component, h } from 'preact'
import Icon from '../icon/Icon'

export default class Sidebar extends Component {

    getTreeView() {
        return this.props.data.map((item) => {
            if (item.header) {
                return (
                    <li className="header">{item.header}</li>
                )
            }
            if (item.link) {
                return (
                    <li>
                        <a href={item.link}>
                            <span>{item.treeview}</span>
                        </a>
                    </li>
                )
            } else {
                return (
                    <li className={this.getClassName(item)}>
                        <a href="#">
                            <span>{item.treeview}</span>
                            {this.getAngle(item)}
                        </a>
                        {item.content ? this.getContent(item) : null}
                    </li>
                )
            }
        })
    }
    getClassName(option) {
        return option.content ? 'treeview' : ''
    }
    getAngle(option) {
        if (option.content) {
            return (
                <span className="pull-right-container">
                    <Icon type="angle-left" />
                </span>
            )
        }
    }
    getContent(option) {
        return (
            <ul className="treeview-menu">
                {
                    option.content.map((item) => {
                        return (
                            <li className={this.getClassName(item)}>
                                <a href={item.link}>
                                    {item.text}
                                    {this.getAngle(item)}
                                </a>
                                {item.content ? this.getContent(item) : null}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
    render() {
        return (
            <section className="sidebar">
                <ul className="sidebar-menu tree" data-widget="tree">
                    {this.getTreeView()}
                </ul>
            </section>
        )
    }
}
