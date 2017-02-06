
import * as React from 'react'
import {tool, View, Image, Text, Button, IButtonProps, Input,
	LabelButton, ILabelButtonProps,
} from '../index'

export interface ILayerProps extends React.HTMLProps<HTMLElement> {
	ref?:string
}
interface IState {}

let sketchLogoUrl = 'https://www.sketchapp.com/images/app-icon@2x.png'
let headerLabels = [
	['Canseq', 'url', '#fff', '#ddd', '#aaa'],
	['Features', 'url', '#fff', '#ddd', '#aaa'],
	['Extensions', 'url', '#fff', '#ddd', '#aaa'],
	['Learn', 'url', '#fff', '#ddd', '#aaa'],
	['Community', 'url', '#fff', '#ddd', '#aaa'],
	['Support', 'url', '#fff', '#ddd', '#aaa'],
	['BuyNow', 'url', '#FFB300', '#E9A912', '#DD7D04'],
]
let headerLabelColors = ['#fff', '#ddd', '#aaa']
let headerLabelBuyColors = ['#FFB300', '#E9A912', '#DD7D04']
export class LikeSketchWeb<P, S> extends React.Component<ILayerProps, IState> {
	css:React.CSSProperties = {}
	rest:React.HTMLProps<HTMLElement> = {}
	static defaultProps = {};
	constructor(props:ILayerProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount():void {}
	render():any {
		this.combProps()
		return (
			<View>
				<View style= {this.cssHeaderGroup()}>
					<View style={{flex:0.7}}></View>
					<LabelButton {...this.propsHeaderText()} style = {this.cssHeaderLogoText()}>{headerLabels[0][0]}</LabelButton>
					{headerLabels.map((item, i)=>{
						if (i === 0 || i === headerLabels.length-1) return
						return (
							<LabelButton {...this.propsHeaderText()} key={`headerLabel ${i}`} style={this.cssHeaderText()}>{item[0]}</LabelButton>
						)
					})}
					<LabelButton {...this.propsHeaderButText()} style = {this.cssHeaderBuyText()}>{headerLabels[headerLabels.length-1][0]}</LabelButton>
					<View style={{flex:0.7}}></View>
				</View>
				<View style={this.cssBannerGroup()}>banner</View>
				<View>cell 01</View>
				<View>cell 02</View>
				<View>cell 03</View>
				<View>cell 04</View>
				<View>cell 05</View>
				<View>cell 06</View>
				<View>cell 07</View>
				<View>cell 08</View>
				<View>cell 09</View>
				<View>footer</View>
			</View>
		)
	}
	componentDidMount():void {}
	componentWillReceiveProps(nextProps:ILayerProps):void {}
	shouldComponentUpdate():boolean { return true }
	componentWillUpdate():void {}
	componentWillUnmount():void {}
	init = ()=>{}
	combProps = ()=>{
		const {style, ...rest} = this.props
	}
	cssHeaderGroup = ()=>{
		let css:React.CSSProperties = {
			backgroundColor: 'rgba(21, 7, 53, 0.66)',
			display: 'flex',
			height: '0.6rem',
			width: '100%',
			justifyContent: 'center',
			position: 'fixed',
		}
		return css;
	}
	propsHeaderText = ()=>{
		let labelButtonProps:ILabelButtonProps = {
			normalColor: headerLabelColors[0],
			enterColor: headerLabelColors[1],
			downColor: headerLabelColors[2]
		}
		return labelButtonProps
	}
	propsHeaderButText = ()=>{
		let labelBuyButtonProps:ILabelButtonProps = {
			normalColor: headerLabelBuyColors[0],
			enterColor: headerLabelBuyColors[1],
			downColor: headerLabelBuyColors[2]
		}
		return labelBuyButtonProps
	}
	cssHeaderLogoText = ()=>{
		let css:React.CSSProperties = {
			// backgroundColor: '#f24',
			fontSize: '0.2rem',
			fontWeight: 'bold',
			flex:1,
			margin:'0.1rem',
			textAlign: 'center',
			lineHeight: '0.38rem',
			fontFamily: tool.fontFamily,
		}
		return css
	}
	cssHeaderText = ()=>{
		let css:React.CSSProperties = {
			// backgroundColor: '#f84',
			fontSize: '0.14rem',
			fontWeight: 'normal',
			flex: 1,
			margin:'0.1rem',
			textAlign: 'center',
			lineHeight: '0.42rem',
			fontFamily: tool.fontFamily,
		}
		return css
	}
	cssHeaderBuyText = ()=>{
		let css:React.CSSProperties = {
			// backgroundColor: '#f84',
			fontSize: '0.14rem',
			fontWeight: 'bold',
			flex: 1,
			margin:'0.1rem',
			textAlign: 'center',
			lineHeight: '0.42rem',
			fontFamily: tool.fontFamily,
		}
		return css
	}
	cssBannerGroup = ()=>{
		let css:React.CSSProperties = {
			backgroundColor:'#1B0F3B',
			height:'6.4rem',
		}
		return css;
	}
	cssCell = ()=>{}
	cssFooter = ()=>{}
}