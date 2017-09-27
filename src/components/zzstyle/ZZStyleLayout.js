import { h } from 'preact'
import './zzstyle.less'

//则忠Style
export default ({ topbar, sidebar, children }) => (
    <div class="zzstyle">
        {topbar}
        <div class="container">
            {sidebar}
            <div class="content">
                {children}
            </div>
        </div>
    </div>
)

