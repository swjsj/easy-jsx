import { h } from 'preact'
import { Router } from 'preact-router';

import Layout from '../components/Layout';
import Button from '../components/Button/Button'
import Icon from '../components/Icon/Icon'
import Sliders from '../components/Sliders/Sliders'
import Timeline from '../components/Timeline/Timeline'
import Input from '../components/Input/Input'
import InputGroup from '../components/Input/InputGroup'
import Form from '../components/Form/Form'
import FormItem from '../components/Form/FormItem'
import Sidebar from '../components/Sidebar/Sidebar'
import Select from '../components/Select/Select'
import SelectOption from '../components/Select/SelectOption'
import DatePicker from '../components/Input/DatePicker'
import Error404 from './pages/errors/404';

// track pages on route change
const onChange = obj => window.ga && ga.send('pageview', { dp: obj.url });

let slidebardata = [
	{
		header: 'MAIN NAVIGATION'
	},
	{
		treeview: 'Dashboard',
		content: [
			{
				link: 'www.baidu.com',
				text: 'Dashboard v1'
			},
			{
				link: 'www.baidu.com',
				text: 'Dashboard v2'
			}
		]
	},
	{
		treeview: 'Dashboard',
		link: 'www.baidu.com'
	},
	{
		treeview: 'Dashboard',
		content: [
			{
				text: 'Dashboard v1',
				content: [
					{
						link: 'www.baidu.com',
						text: 'Dashboard v1--1',
					},
					{
						link: 'www.baidu.com',
						text: 'Dashboard v1--2',
					},
					{
						link: 'www.baidu.com',
						text: 'Dashboard v1--3',
					}
				]
			},
			{
				link: 'www.baidu.com',
				text: 'Dashboard v2'
			}
		]
	},
	{
		treeview: 'Dashboard',
		link: 'www.baidu.com'
	}
]
let InputGroupBtn = {
	text: '这个是下拉按钮',
	type: 'warning',
	content: [
		{
			link: 'www.baidu.com',
			text: '第一个'
		},
		{
			link: 'www.baidu.com',
			text: '第二个'
		},
		{
			link: 'www.baidu.com',
			text: '第三个'
		},
		{
			link: 'www.baidu.com',
			text: '第四个'
		}
	]
}
export default (
	<Layout>
		<Router onChange={onChange}>
			<div path="/">
				<div class="view-box">
					<DatePicker id="datepicker"/>
				</div>
				<div class="view-box">
					<Sidebar data={slidebardata} />
				</div>
				<div class="view-box">
					<Form className="form-horizontal">
						<FormItem>
							<Select>
								<SelectOption>Alaska</SelectOption>
								<SelectOption selected="selected">California</SelectOption>
								<SelectOption>Delaware</SelectOption>
								<SelectOption>Tennessee</SelectOption>
								<SelectOption>Texas</SelectOption>
								<SelectOption>Washington</SelectOption>
							</Select>
						</FormItem>
						<FormItem>
							<Input type="checkbox" />
						</FormItem>
						<FormItem>
							<Input type="radio" />
						</FormItem>
						<FormItem>
							<InputGroup beforeBtn={InputGroupBtn} afterGroup={<Icon type="anchor" />} placeholder="" />
						</FormItem>
						<FormItem>
							<Input />
						</FormItem>
						<FormItem>
							<div className="row">
								<div className="col-xs-3">
									<Input />
								</div>
								<div className="col-xs-3">
									<Input />
								</div>
								<div className="col-xs-3">
									<Input />
								</div>
								<div className="col-xs-3">
									<Input />
								</div>
							</div>
						</FormItem>
						<FormItem>
							<label htmlFor="" className="control-label">请输入手机号</label>
							<Input />
						</FormItem>
						<FormItem>
							<div className="row">
								<div className="col-xs-4">
									<label htmlFor="" className="control-label">请输入手机号</label>
								</div>
								<div className="col-xs-8">
									<Input />
								</div>
							</div>
						</FormItem>
						<FormItem>
							<InputGroup beforeGroup={<Input type="checkbox" />} afterGroup={<Icon type="anchor" />} placeholder="" />
						</FormItem>

					</Form>
				</div>
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
					<Sliders id="" />
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
