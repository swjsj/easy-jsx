import { h } from 'preact'
import { Router } from 'preact-router';

import Layout from './tags/layout';
import Button from '../components/Button/Button'
import Icon from '../components/Icon/Icon'
import Sliders from '../components/Sliders/Sliders'
import Timeline from '../components/Timeline/Timeline'
import Error404 from './pages/errors/404';

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
					<button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-default">Launch Default Modal</button>
					<div class="modal fade" id="modal-default">
						<div class="modal-dialog">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">×</span></button>
									<h4 class="modal-title">Default Modal</h4>
								</div>
								<div class="modal-body">
									<p>One fine body…</p>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
									<button type="button" class="btn btn-primary">Save changes</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Icon path="/blog" />
			<Sliders path="/blog/:title" />
			<Timeline path="/credit" />
			<Error404 default />
		</Router>
	</Layout>
);
