import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'

export interface IViewProps extends React.HTMLProps<HTMLElement> {
	ref?: string,
	full?:string, //window, none, super,
	flex?: string, //row, column,
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
	changePhone = ()=>{
		if (tool.pc) return
		this.css = {
			'-webkit-appearance': 'none',
			'-webkit-tap-highlight-color': 'transparent',
			'-webkit-touch-callout': 'none',
			'-webkit-transform-style': 'preserve-3d',
			'-webkit-backface-visibility': 'hidden',
			'-webkit-user-select': 'none',	/*webkit浏览器*/
			'-moz-user-select': 'none',	/*火狐*/
			'-ms-user-select': 'none',	/*IE10*/
			'user-select': 'none',
			'onselectstart': 'none',
		}
	}
	init = ()=>{
		this.changePhone()
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
				position:'absolute',
				width:'100%',
				height:'100%',
			}
			this.css = {...temp, ...this.css}
		}
		if(this.props.flex === 'row') {
			let temp:React.CSSProperties = {
				display:'flex',
				flexDirection: 'row',
			}
			this.css = {...temp, ...this.css}
		} else if(this.props.flex === 'column'){
			let temp:React.CSSProperties = {
				display:'flex',
				flexDirection: 'column',
			}
			this.css = {...temp, ...this.css}
		}

	}
	combProps = (props: IViewProps)=> {
		const {style, full, flex, ...rest} = props;
		this.rest = {...rest};
		this.css = {...this.css, ...style}
		this.rest = {...this.rest, style:this.css}
	}
}