import { h } from 'preact'
import { Router } from 'preact-router';

import Layout from '../views/tags/layout';
import Button from './Button/Button'
import Icon from './Icon/Icon'
import Sliders from './Sliders/Sliders'
import Timeline from './Timeline/Timeline'
import Error404 from '../views/pages/errors/404';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp:obj.url });

export default (
	<Layout>
		<Router onChange={ onChange }>
			<Button path="/" />
			<Icon path="/blog" />
			<Sliders path="/blog/:title" />
			<Timeline path="/credit" />
			<Error404 default />
		</Router>
	</Layout>
);
