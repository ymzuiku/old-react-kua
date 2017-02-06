import * as React from 'react'
import {Button, IButtonProps} from '../basic/Button'

export interface ILabelButtonProps extends IButtonProps {
	ref?:string
	enterColor:string,
	downColor:string,
	normalColor:string,
	block?:Function,
}
interface IState {
	color:string,
}

export class LabelButton<P, S> extends React.Component<ILabelButtonProps, IState> {
	css:React.CSSProperties = {}
	rest:IButtonProps = {}
	static defaultProps = {};
	constructor(props:ILabelButtonProps){
		super(props)
		this.state = {
			color:this.props.enterColor
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
		const {style, enterColor, downColor, normalColor, pickDown, pickEnter, pickEnd, ...rest} = this.props
		this.css = {
			color: this.state.color,
			...style
		}
		this.rest = {
			pickEnter:()=>{
				console.log('enter')
				this.setState({
					color:this.props.enterColor
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
					color:this.props.normalColor
				})
				if(this.props.block) this.props.block()
			},
			...rest,
		}
	}
}