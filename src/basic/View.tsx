import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'
import * as _ from 'underscore'

export interface IViewProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
	full:string, //window, none, super,
}
interface IState {}

export class View extends React.Component<IViewProps, IState> {
	static defaultProps = {
		full:'none'
	};
	private css:React.CSSProperties = {}
	private rest:any;
	constructor(props: IViewProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.combProps(this.props)
		return (
			<Layer style = {this.css} {...this.rest}>{this.props.children}</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps = (nextProps: IViewProps)=>{}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}

	// --------------
	init(){
		tool.setPhoneView(this.css)
		if (this.props.full === 'none') {
			let temp:React.CSSProperties = {
				backgroundColor: '#aaa',
				position: 'abstract',
				left: '0rem',
				top: '0rem',
				right: '0rem',
				bottom: '0rem'
			}
			this.css = _.assign(this.css, temp)
		}
	}
	combProps = (props: IViewProps)=> {
		const {style, full, ...rest} = props;
		this.rest = rest;
		if(tool.pc) {
			this.css = style
		} else {
			this.css = _.assign(this.css, style)
		}
	}
}