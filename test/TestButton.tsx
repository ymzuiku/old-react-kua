import * as React from 'react'
import {Button, IButtonProps, Layer, View, tool} from '../index'

interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {
	color: String
}

export class TestButton extends React.Component<IProps, IState> {
	static defaultProps = {};
	constructor(props:IProps){
		super(props)
		this.state = {
			color: '#aaa'
		}
	}
	componentWillMount = ()=>{}
	render(){
		let a:IButtonProps = {
			pickEnter: ()=>{
				this.setState({
					color:'#888'
				})
			},
			pickDown: ()=>{
				this.setState({
					color:'#444'
				})
			},
			pickEnd: ()=>{
				this.setState({
					color:'#aaa'
				})
			},
		}
		let sty:React.CSSProperties = {
			color:this.state.color, fontFamily:tool.fontFamily, fontSize:'1rem',
			backgroundColor:'#f90',
			borderRadius:'0.12rem',
			margin:'0.2rem'
		}
		a = {...a, style:sty}
		return (
			<View>
				<View full='window' style={{backgroundColor:'#f84'}}>
					<Button {...a}>the btn 0</Button>
					<Button {...a}>the btn 0</Button>
					<Button {...a}>the btn 0</Button>
				</View>
				<View full='window' style={{zIndex:-999}}></View>
			</View>
		)
	}
	componentDidMount = ()=>{}
	componentWillReceiveProps = (nextProps:IProps) =>{}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}

	// ----
	changeColor = ()=>{
		this.setState({
			color:'#ccc'
		})
	}
}