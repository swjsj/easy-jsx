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
import Editor from '../components/Editor/Editor'
import Modals from '../components/Modals/Modals'
import Alert from '../components/Alert/Alert'
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
				<div className="view-box">
					<Alert icon={<Icon type="anchor" />} title="这个是标题" type="info">
						这里是正文这里是正文这里是正文这里是正文这里是正文
					</Alert>
				</div>
				<div className="view-box">
					<Editor className="Editor" />
				</div>
				<div className="view-box">
					<DatePicker beforeGroup={<Icon type="anchor" />} id="datepicker" />
				</div>
				<div className="view-box">
					<Sidebar data={slidebardata} />
				</div>
				<div className="view-box">
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
				<div className="view-box">
					<Button type="success" size="Large" flat="true">1222222</Button>
				</div>
				<div className="view-box">
					<Icon type="anchor" />
				</div>
				<div className="view-box">
					<Timeline />
				</div>
				<div className="view-box">
					<Sliders id="" />
				</div>
				<div className="view-box">
					<button type="button" className="btn btn-default" data-toggle="modal" data-target="#modal-default">Launch Default Modal</button>
					<Modals type="default" id="modal-default" title="这个是标题">
						<p>这里是主体内容</p>
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
