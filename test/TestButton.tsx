import * as React from 'react'
import {Button, IButtonProps, Layer, View} from '../index'

interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {
	css: React.CSSProperties
}

export class TestButton extends React.Component<IProps, IState> {
	static defaultProps = {};
	constructor(props:IProps){
		super(props)
		this.state = {
			css: {color:'#84f'}
		}
	}
	componentWillMount = ()=>{}
	render(){
		let a:IButtonProps = {
			pickEnter: ()=>{
				this.setState({
					css: {color:'#48f'}
				})
				console.log('enter')
			},
			pickDown: ()=>{
				this.setState({
					css: {color:'#f84'}
				})
				console.log('down')
			},
			pickUp: ()=>{
				this.setState({
					css: {color:'#aaa'}
				})
				console.log('up')
			},
		}
		a.style = this.state.css
		return (
			<View>
				<Button {...a}>the btn 1</Button>
				<Button {...a}>the btn 2</Button>
			</View>
		)
	}
	componentDidMount = ()=>{}
	componentWillReceiveProps = (nextProps:IProps) =>{}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}
}