import * as React from 'react'
import {Button, IButtonProps} from '../basic/Button'

export interface ILabelButtonProps extends IButtonProps {
	ref?:string
	enterColor:string,
	downColor:string,
	normalColor:string,
	backgroundColor?:string,
	normalbackgroundColor?: string,
	enterBackgroundColor?: string,
	block?:Function,
}
interface IState {
	color:string,
	backgroundColor: string,
}


export class LabelButton<P, S> extends React.Component<ILabelButtonProps, IState> {
	css:React.CSSProperties = {}
	rest:IButtonProps = {}
	static defaultProps = {
		normalbackgroundColor: 'rgba(128,128,128,0)',
		enterBackgroundColor: 'rgba(128,128,128,0)'
	};
	constructor(props:ILabelButtonProps){
		super(props)
		this.state = {
			color:this.props.normalColor,
			backgroundColor: this.props.normalbackgroundColor
		}
		this.init()
	}
	componentWillMount():void {}
	render():any {
		this.combProps()
		return (
			<Button style={this.css} {...this.rest}>{this.props.children}</Button>
		)
	}
	componentDidMount():void {}
	componentWillReceiveProps(nextProps:ILabelButtonProps):void {}
	shouldComponentUpdate():boolean { return true }
	componentWillUpdate():void {}
	componentWillUnmount():void {}
	//--------------
	init = ()=>{

	}
	combProps = ()=>{
		const {style, enterColor, downColor, normalColor, pickDown, pickEnter, pickEnd, normalbackgroundColor, enterBackgroundColor, ...rest} = this.props
		this.css = {
				color: this.state.color,
				backgroundColor: this.state.backgroundColor,
				padding:'0.16rem',
				borderRadius:'0.12rem',
				...style
			}
			this.rest = {
				pickEnter:()=>{
					this.setState({
						color:this.props.enterColor,
						backgroundColor: enterBackgroundColor,
					})
				},
				pickDown: ()=>{
					this.setState({
						color:this.props.downColor,
						backgroundColor: enterBackgroundColor,
					})
				},
				pickEnd: ()=>{
					this.setState({
						color:this.props.normalColor,
						backgroundColor: normalbackgroundColor,
					})
					if(this.props.block) this.props.block()
				},
				...rest,
			}
		
	}
}