import * as React from 'react'
import {Button, IButtonProps} from '../basic/Button'

export interface ILabelButtonProps extends IButtonProps {
	ref?:string
	enterColor:string,
	downColor:string,
	normalColor:string,
	backgroundColor?:string,
	block?:Function,
}
interface IState {
	color:string,
	backgroundColor: string,
}

export class LabelButton<P, S> extends React.Component<ILabelButtonProps, IState> {
	css:React.CSSProperties = {}
	rest:IButtonProps = {}
	static defaultProps = {};
	constructor(props:ILabelButtonProps){
		super(props)
		this.state = {
			color:this.props.normalColor,
			backgroundColor: 'rgba(0,0,0,0)'
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
		const {style, enterColor, downColor, normalColor, pickDown, pickEnter, pickEnd, backgroundColor, ...rest} = this.props
		this.css = {
			color: this.state.color,
			backgroundColor: this.state.backgroundColor || 'rgba(0,0,0,0)',
			...style
		}
		this.rest = {
			pickEnter:()=>{
				console.log('enter')
				this.setState({
					color:this.props.enterColor,
					backgroundColor: this.props.backgroundColor || 'rgba(0,0,0,0)'
				})
			},
			pickDown: ()=>{
				console.log('down')
				this.setState({
					color:this.props.downColor
				})
			},
			pickEnd: ()=>{
				this.setState({
					color:this.props.normalColor,
					backgroundColor: 'rgba(0,0,0,0)'
				})
				if(this.props.block) this.props.block()
			},
			...rest,
		}
	}
}