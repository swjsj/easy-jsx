import React from 'react'

export default class Icon extends React.Component {
    render() {
        let IconClass = `fa fa-fw fa-${this.props.type}`
        return (
            <i className={IconClass}></i>
        )
    }
}
