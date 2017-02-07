import * as React from 'react'
import {Layer} from './Layer'
import {View, IViewProps} from './View'
import {tool} from '../tool'
import {Image, IImageProps} from './Image'

export interface IButtonProps extends IViewProps {
	ref?:string,
	pickEnter?: Function,
	pickDown?: Function,
	pickEnd?:Function,
}
interface IState {}

export class Button<P, S> extends React.Component<IButtonProps, IState> {
	public css:React.CSSProperties = {}
	public rest:IButtonProps = {}
	static defaultProps = {};
	constructor(props:IButtonProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.compProps(this.props)
		return (
			<View {...this.rest}>{this.props.children}</View>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:IButtonProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}

	// ------
	init = ()=>{
		if(tool.pc) {
			this.rest = {
				onMouseEnter: this.handleMouseEnter,
				onMouseLeave: this.handleMouseLeav,
				onMouseDown: this.handleMouseDown,
				onMouseUp: this.handleMouseUp,
			}
		} else {
			this.rest = {
				onTouchStart: this.handleTouchStart,
				onTouchEnd: this.handleTouchEnd,
				onTouchCancel: this.handleTouchCancel
			}
		}
		this.css = {
			cursor: 'pointer',
		}
	}
	compProps = (props: IButtonProps)=>{
		const {style, pickDown, pickEnter, pickEnd, ...rest} = props;
		this.css = {...this.css, ...style}
		this.rest = {...this.rest, ...rest, style:this.css}
	}
	handleMouseEnter = ()=>{
		if(this.props.pickEnter) {
			this.props.pickEnter()
		}
	}
	handleMouseLeav = ()=>{
		if(this.props.pickEnd) {
			this.props.pickEnd()
		}
	}
	handleMouseDown = ()=>{
		if (this.props.pickDown) {
			this.props.pickDown()
		}
	}
	handleMouseUp = ()=>{
		if(this.props.pickEnter) {
			this.props.pickEnter()
		}
	}
	handleTouchStart = ()=>{
		if (this.props.pickDown) {
			this.props.pickDown()
		}
	}
	handleTouchEnd = ()=>{
		if(this.props.pickEnd) {
			this.props.pickEnd()
		}
	}
	handleTouchCancel = ()=>{
		if(this.props.pickEnd) {
			this.props.pickEnd()
		}
	}
}