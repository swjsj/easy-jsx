
import { Component, h } from 'preact'
import Icon from '../icon/Icon'
import * as util from '../util'
var shortid = require('shortid');
import './codebox.less'
export default class Codebox extends Component {



    initedPrism = false;
    showingCode = false;


    toggleCode() {
        var $this = $(this.base);
        if (this.showingCode) {
            $this.find('.showcode-box').hide();
            $this.find('.code-expand-icon-show').show();
            $this.find('.code-expand-icon-hide').hide();
        } else {
            if (this.initedPrism) {
                $this.find('.showcode-box').show();
                $this.find('.code-expand-icon-show').hide();
                $this.find('.code-expand-icon-hide').show();
            } else {

                var $code = $this.find('code');


                $code[0].textContent = $this[0].source;
                Prism.highlightElement($code[0]);

                $this.find('.showcode-box').show();
                $this.find('.code-expand-icon-show').hide();
                $this.find('.code-expand-icon-hide').show();
                this.initedPrism = true;
            }
        }

        this.showingCode = !this.showingCode;
    }



    render() {
        return (

            <div class="codebox" {...this.props}>
                <div className="showcomponent-box">
                    {this.props.children}
                    <span class="code-expand-icon" style="" onClick={this.toggleCode.bind(this)}>
                        <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" class="code-expand-icon-show" />
                        <img alt="expand code" src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" class="code-expand-icon-hide" style={{ display: 'none' }}/>
                    </span>
                </div>
                <pre className="showcode-box language-jsx" style={{ display: 'none' }}>
                    <code class="language-jsx"></code>
                </pre>
            </div>
        )
    }
}
