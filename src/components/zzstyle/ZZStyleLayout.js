import { h, Component } from 'preact'
import './zzstyle.less';

//则忠Style
export default class ZZStyleLayout extends Component {
    state = {
        tabAry: []
    }
    render() {
        return (
            <div className="zzstyle">
                {this.props.children}
            </div>
        )
    }
}
