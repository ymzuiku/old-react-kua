import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'

export interface ITextProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Text extends React.Component<ITextProps, IState> {
	static defaultProps = {};
	private css:React.CSSProperties = {}
	private rest:ITextProps = {}
	constructor(props: ITextProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.combProps(this.props)
		return (
			<span {...this.rest}>{this.props.children}</span>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:ITextProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
	//
	changePhone = ()=>{
		if (tool.pc) return
		this.css = {
			'-webkit-appearance': 'none',
			'-webkit-tap-highlight-color': 'transparent',
			//调用键盘，加了这行微信会提示防盗号
			// '-webkit-user-modify': 'read-write-plaintext-only',
			'-webkit-touch-callout': 'none',
			'-webkit-transform-style': 'preserve-3d',
			'-webkit-backface-visibility': 'hidden',
		}
	}
	init = ()=>{
		this.changePhone()
	}
	combProps = (props: ITextProps)=> {
		const {style, ...rest} = props;
		this.css = {...this.css, ...style}
		this.rest = {...rest, style:this.css}
	}
}