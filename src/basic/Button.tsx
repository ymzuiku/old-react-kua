import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'

export interface IButtonProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
	pickEnter?: Function,
	pickDown?: Function,
	pickUp?:Function,
}
interface IState {}

export class Button extends React.Component<IButtonProps, IState> {
	public css:React.CSSProperties
	public ps:IButtonProps = {}
	public static interfaceOfProps:IButtonProps
	static defaultProps = {};
	constructor(props:IButtonProps){
		super(props)
		this.state = {}
		this.create()
	}
	componentWillMount(){}
	render(){
		this.reloadProps(this.props)
		return (
			<Layer {...this.ps}>{this.props.children}</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:IButtonProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}

	reloadProps = (props: IButtonProps)=>{
		const {style, pickDown, pickEnter, pickUp, ...rest} = props;
		if (this.css) {
			this.css = tool.assign(this.css, style)
			this.ps.style = this.css
		} else {
			this.ps.style = style
		}
		this.ps = tool.assign(this.ps, rest)
	}
	// ------
	create = ()=>{
		if(tool.pc) {
			this.ps = {
				onMouseEnter: this.handleMouseEnter,
				onMouseLeave: this.handleMouseLeav,
				onMouseDown: this.handleMouseDown,
				onMouseUp: this.handleMouseUp,
			}
		} else {
			this.ps = {
				onTouchStart: this.handleTouchStart,
				onTouchEnd: this.handleTouchEnd,
				onTouchCancel: this.handleTouchCancel
			}
			this.css = {}
			tool.setPhoneView(this.css)
		}
	}
	handleMouseEnter = ()=>{
		if(this.props.pickEnter) {
			this.props.pickEnter()
		}
	}
	handleMouseLeav = ()=>{
		if(this.props.pickUp) {
			this.props.pickUp()
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
		if(this.props.pickUp) {
			this.props.pickUp()
		}
	}
	handleTouchCancel = ()=>{
		if(this.props.pickUp) {
			this.props.pickUp()
		}
	}
}