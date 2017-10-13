import { Component, h } from 'preact'
import { Link } from 'preact-router';
import Icon from '../icon/Icon'

export default class Timeline extends Component {

    getTimeline() {
        
        return this.props.data.map((item) => {
            return (
                <div className="time-warp">
                    <li className="time-label" key={item}>
                        <span className={item.timeLabel.type}>{item.timeLabel.content}</span>
                    </li>
                    <li>
                        <Icon type={item.timelineItem.icon.type} colorType={item.timelineItem.icon.colorType} />
                        <div className="timeline-item">
                            <span className="time"><Icon type={item.timelineItem.content.time.icon.type} colorType={item.timelineItem.content.time.icon.colorType} />{item.timelineItem.content.time.content}</span>
                            <h3 className="timeline-header"><Link to={item.timelineItem.content.header.link}>{item.timelineItem.content.header.content}</Link></h3>
                            <div className="timeline-body">{item.timelineItem.content.body.content}</div>
                            <div className="timeline-footer" dangerouslySetInnerHTML={{ __html: item.timelineItem.content.footer.content }}></div>
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
