import * as React from 'react'
import {Layer, View, Text,tool } from '../index'

interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

//这里按序列出react完整生命周期
export class HelloWorld extends React.Component<IProps, IState> {
	private bgCss:React.CSSProperties = {}
	private titleCss:React.CSSProperties = {}
	private tipCss:React.CSSProperties = {}
	static defaultProps = {};
	constructor(props:IProps){
		super(props)
		this.state = {}
		this.bgCss = {
			position:'relative',
			textAlign:'center',
			backgroundColor:'#8d8',
			borderRadius:'0.12rem',
			margin: '2rem',
		}
		this.titleCss = {
			textAlign:'center',
			fontSize:'0.64rem', 
			lineHeight:'2.64rem',
			color:'#fff',
			fontFamily: tool.fontFamily
			// margin: '2rem'
		}
		this.tipCss = {
			textAlign:'center',
			fontSize:'0.24rem', 
			lineHeight:'1.64rem',
			marginTop:'-1rem',
			color:'#fff'
		}
	}
	componentWillMount = ()=>{}
	render(){
		return (
			<Layer style={this.bgCss} {...this.props}>
				<View style={this.titleCss}>Hello Kua.</View>
				<div style={this.tipCss}>Web is a natural cross platform</div>
				{this.props.children}
			</Layer>
		)
	}
	componentDidMount = ()=>{}
	componentWillReceiveProps = (nextProps:IProps) =>{}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}
}