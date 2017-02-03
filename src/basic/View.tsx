import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'

export interface IViewProps extends React.HTMLProps<HTMLElement> {
	ref?: string,
	full?:string, //window, none, super,
}
interface IState {}

export class View extends React.Component<IViewProps, IState> {
	static defaultProps = {
		full:'none'
	};
	private css:React.CSSProperties = {}
	private rest:IViewProps = {}
	constructor(props: IViewProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.combProps(this.props)
		return (
			<Layer {...this.rest}>{this.props.children}</Layer>
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
		if (this.props.full === 'window') {
			let temp:React.CSSProperties = {
				position: 'fixed',
				left: '0rem',
				top: '0rem',
				right: '0rem',
				bottom: '0rem'
			}
			this.css = {...this.css, ...temp}
		} else if (this.props.full === 'super') {
			let temp:React.CSSProperties = {
				position: 'abstract',
				left: '0rem',
				top: '0rem',
				right: '0rem',
				bottom: '0rem'
			}
			this.css = {...this.css, ...temp}
		}
	}
	combProps = (props: IViewProps)=> {
		const {style, full, ...rest} = props;
		this.rest = {...rest};
		this.css = {...this.css, ...style}
		this.rest = {...this.rest, style:this.css}
	}
}