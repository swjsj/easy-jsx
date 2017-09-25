import React from 'preact'
import Icon from '../Icon/Icon'

export default class Timeline extends React.Component {

    getTimeline() {
        var data = [
            {
                timeLabel: {
                    type: 'bg-red',
                    content: '10 Feb. 2014'
                },
                timelineItem: {
                    icon: {
                        type: 'envelope',
                        colorType: 'bg-blue'
                    },
                    content: {
                        time: {
                            content: '12:05',
                            icon: {
                                type: 'clock-o',
                                colorType: ''
                            }
                        },
                        header: {
                            link: 'www.baidu.comn',
                            content: 'Support Team'
                        },
                        body: {
                            content: '...Content goes here'
                        },
                        footer: {
                            content: '<a className="btn btn-primary btn-xs">...</a>'
                        }
                    }
                }
            }
        ]
        return data.map((item) => {
            return (
                <div >
                    <li className="time-label" key={item}>
                        <span className={item.timeLabel.type}>{item.timeLabel.content}</span>
                    </li>
                    <li>
                        <Icon type="envelope" />
                        <i className="fa fa-envelope bg-blue"></i>
                        <div className="timeline-item">
                            <span className="time"><Icon type={item.timelineItem.content.time.icon.type} /> <i className="fa fa-clock-o"></i>{item.timelineItem.content.time.content}</span>
                            <h3 className="timeline-header"><a href="#">Support Team</a> ...</h3>
                            <div className="timeline-body">...Content goes here</div>
                            <div className="timeline-footer">
                            </div>
                        </div>
                    </li>
                </div>
            )
        })
    }

    render() {

        return (
            <ul className="timeline" >
                {this.getTimeline()}
            </ul>
        )
    }
}
