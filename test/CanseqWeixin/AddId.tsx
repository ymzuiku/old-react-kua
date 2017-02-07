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

let blueLabelButtonColor = ['#57C1FF', '#AFE2FF', '#D7DECA']
let waitLabelButtonColor = ['#fff', '#AFE2FF', '#D7DECA']

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
			children:'购买企业服务',
			normalColor: blueLabelButtonColor[0],
			enterColor: blueLabelButtonColor[1],
			downColor: blueLabelButtonColor[2],
			style:{
				marginLeft:'0.4rem',
				fontSize:'0.26rem',
				flex:1,
				textAlign:'left',
				lineHeight:'0.9rem',
				fontFamily:tool.fontFamily,
			},
		}
		let menu:ILabelButtonProps = {
			children:'菜单',
			normalColor: '#fff',
			enterColor: '#ddd',
			downColor:'#aaa',
			style:{
				marginRight:'0.4rem',
				fontSize:'0.26rem',
				flex:1,
				textAlign:'right',
				lineHeight:'0.9rem',
				fontFamily:tool.fontFamily,
			},
		}
		let longText = ['金丝带网站(Canseq.com)为机构用户搭建一个包括','HPV初筛、阳性患者管理(诊断与治疗)和云端数据服务', '在内的宫颈癌预防技术闭环，是降低群体宫颈癌发病率和死亡率的有效解决方案。']
		let bodyTopLongText:ITextProps = {
			style:{
				textIndent:'0.4rem',
				fontSize:'0.22rem',
				color:'#fff',
				marginTop:'0.5rem',
				marginLeft:'0.8rem',
				marginRight:'0.8rem',
				fontFamily: tool.fontFamily,
			}
		}
		let logo:IImageProps = {
			src:'../../public/canseq_logo.png',
			style:{
				width:'3.16rem',
				marginTop:'0.5rem',
			}
		}
		let videoButton:ILabelButtonProps = {
			children:'观看宫颈癌科筛查普宣传片',
			normalColor:waitLabelButtonColor[0],
			enterColor: waitLabelButtonColor[1],
			downColor: waitLabelButtonColor[2],
			enterBackgroundColor:'rgba(256,256,256,0.2)',
			style:{
				fontSize:'0.26rem',
				textAlign:'center',
				margin:'0.1rem',
				marginTop:'0.4rem',
				display:'flex',
				flexDirection: 'row',
				alignSelf:'center',
			}
		}
		let viewListButton:ILabelButtonProps = {
			children:'查看针对组织用户的服务内容',
			normalColor:waitLabelButtonColor[0],
			enterColor: waitLabelButtonColor[1],
			downColor: waitLabelButtonColor[2],
			enterBackgroundColor:'rgba(256,256,256,0.2)',
			style:{
				fontSize:'0.26rem',
				textAlign:'center',
				margin:'0.1rem',
				display:'flex',
				flexDirection: 'row',
				// lineHeight:'0.1rem',
				alignSelf:'center',
			}
		}
		let videoIcon:IImageProps = {
			src:'../../public/video_play.png',
			style:{
				width:'0.32rem',
				marginRight:'0.16rem',
			}
		}
		let viewListIcon: IImageProps = {
			src:'../../public/view_list.png',
			style:{
				width:'0.32rem',
				marginRight:'0.16rem',
			}
		}
		return (
			<View {...root}>
				<View ref='bodyTop' {...bodyTop}>
					<View ref='bodyTop_topbar' {...topBar}>
						<LabelButton {...buy}></LabelButton>
						<View style={{flex:1}}></View>
						<LabelButton {...menu}></LabelButton>
					</View>
					<View ref='bodyTop_middle' flex='column'>
						<View style={{textAlign:'center'}}>
							<Image {...logo}></Image>
						</View>
						<Text {...bodyTopLongText}>
							<Text style={{color:'rgba(255,255,255,0.5)'}}>{longText[0]}</Text>
							<Text style={{color:'rgba(255,255,255,0.85)'}}>{longText[1]}</Text>
							<Text style={{color:'rgba(255,255,255,0.5)'}}>{longText[2]}</Text>
						</Text>
					</View>
					<View ref='buttons' flex='column'>
						<LabelButton {...videoButton}><Image {...videoIcon}></Image>{videoButton.children}</LabelButton>
						<LabelButton {...viewListButton}><Image {...viewListIcon}></Image>{viewListButton.children}</LabelButton>
					</View>
				</View>
				<View {...bodyDown}></View>
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