import { h } from 'preact'
import { Router } from 'preact-router';

import Layout from '../views/tags/layout';
import Button from './Button/Button'
import Icon from './Icon/Icon'
import Sliders from './Sliders/Sliders'
import Timeline from './Timeline/Timeline'
import Modals from './Modals/Modals'
import Error404 from '../views/pages/errors/404';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp: obj.url });

export default (
	<Layout>
		<Router onChange={onChange}>
			<div path="/">
				<div class="view-box">
					<Button type="success" size="Large" flat="true">1222222</Button>
				</div>
				<div class="view-box">
					<Icon type="anchor" />
				</div>
				<div class="view-box">
					<Timeline />
				</div>
				<div class="view-box">
					<button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-info">Launch Default Modal</button>
					<Modals type="info" id="modal-info" title="这是一个模态框" onClick={() => { alert('关闭') }}>
						<p>One fine body…</p>
					</Modals>
				</div>
			</div>
			<Icon path="/blog" />
			<Sliders path="/blog/:title" />
			<Timeline path="/credit" />
			<Error404 default />
		</Router>
	</Layout>
);
