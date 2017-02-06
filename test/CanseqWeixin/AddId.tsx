import * as React from 'react'
import {
	tool,
	Button, IButtonProps,
	LabelButton, ILabelButtonProps,
	Text, ITextProps,
	Input, IInputProps,
	Image, IImageProps,
	View, IViewProps,
} from '../../index'

interface IProps extends React.HTMLProps<HTMLElement>{
	ref?:string,
}

export interface IAddidProps extends React.HTMLProps<HTMLElement> {
	ref?:string
}
interface IState {}

export class AddId<P, S> extends React.Component<IAddidProps, IState> {
	css:React.CSSProperties = {}
	rest:React.HTMLProps<HTMLElement> = {}
	static defaultProps = {};
	constructor(props:IAddidProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount():void {}
	render():any {
		this.combProps()
		let root:IViewProps = {
			full:'super',
			flex: 'column',
		}
		let bodyTop:IProps = {
			style:{
				backgroundColor: '#281559',
				flex:0.6,
			}
		}
		let bodyDown:IProps = {
			style:{
				backgroundColor: '#fff',
				flex:0.4,
			}
		}
		let topBar:IViewProps = {
			flex:'row',
			style:{
				height:'0.9rem',
				// backgroundColor:'#f00',
			}
		}
		let buy:ILabelButtonProps = {
			normalColor: '#ECC41D',
			enterColor: '#FED837',
			downColor:'#D6AE06',
			style:{
				marginLeft:'0.4rem',
				fontSize:'0.28rem',
				flex:1,
				textAlign:'left',
				lineHeight:'0.9rem',
				fontFamily:tool.fontFamily,
			},
		}
		let menu:ILabelButtonProps = {
			normalColor: '#fff',
			enterColor: '#ddd',
			downColor:'#aaa',
			style:{
				marginRight:'0.4rem',
				fontSize:'0.28rem',
				flex:1,
				textAlign:'right',
				lineHeight:'0.9rem',
				fontFamily:tool.fontFamily,
			},
		}
		let bodyTopLongText = `金丝带网站(Canseq.com)为机构用户搭建一个包括HPV初筛、阳性患者管理(诊断与治疗)和云端数据服务在内的宫颈癌预防技术闭环，是降低群体宫颈癌发病率和死亡率的有效解决方案。`
		return (
			<View {...root}>
				<View ref='bodyTop' {...bodyTop}>
					<View ref='bodyTop_topbar' {...topBar}>
						<LabelButton {...buy}>购买企业服务</LabelButton>
						<View style={{flex:2}}></View>
						<LabelButton {...menu}>菜单</LabelButton>
					</View>
					<View ref='bodyTop_middle' flex='column'>
						<Image src='./images/canseq_logo.png'>aa</Image>
						<Text>{bodyTopLongText}</Text>
					</View>
				</View>
				<View {...bodyDown}>bodyDown</View>
			</View>
		)
	}
	componentDidMount():void {}
	componentWillReceiveProps(nextProps:IAddidProps):void {}
	shouldComponentUpdate():boolean { return true }
	componentWillUpdate():void {}
	componentWillUnmount():void {}
	init = ()=>{}
	combProps = ()=>{}
}	