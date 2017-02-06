import * as React from 'react'
import {tool} from '../tool'

export interface IInputProps extends React.HTMLProps<HTMLInputElement> {
	ref?:string,
}
interface IState {}

export class Input extends React.Component<IInputProps, IState> {
	public css:React.CSSProperties = {}
	public rest:React.HTMLProps<HTMLInputElement> = {}
	static defaultProps = {};
	constructor(props:IInputProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.combProps(this.props)
		return (
			<input {...this.rest}>{this.props.children}</input>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:IInputProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
	//-----------
	changePhone = ()=>{
		if (tool.pc) return
		this.css = {
			'-webkit-appearance': 'none',
			'-webkit-tap-highlight-color': 'transparent',
			'-webkit-user-modify': 'read-write-plaintext-only',
			'-webkit-touch-callout': 'none',
			'-webkit-transform-style': 'preserve-3d',
			'-webkit-backface-visibility': 'hidden',
		}
	}
	init =()=>{
		this.changePhone()
		if(this.props.type === 'file') {

		} else if (this.props.type === 'checkbox') {

		} else {
			this.css = {
				...this.css,
				borderWidth:'0.02rem',
				borderColor:'#888',
				borderRadius:'0.06rem',
			}
		}
	}
	combProps = (props:IInputProps)=>{
		const {style, ...rest} = props
		this.css = {...this.css, ...style}
		this.rest = {...rest, style:this.css}
	}
}