import { h } from 'preact'
import config from '../config'
export default ({ children, user, title = 'AdminLTE 2 | Dashboard', staticFileDir = config.staticFileDir }) => (
    <div>
        <div>
            {children}
        </div>

        <div >
            {/* <!-- Morris chart - Sales --> */}
            <div id="revenue-chart" ></div>
            <div id="sales-chart" ></div>
        </div>

    </div>
)
