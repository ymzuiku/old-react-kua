import * as React from 'react'
import {View, Button, Image, Text, ImageBackground} from '../index'

export interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class TestImage extends React.Component<IProps, IState> {
	static defaultProps = {};
	constructor(props:IProps){
		super(props)
		this.state = {}
	}
	componentWillMount = ()=>{}
	render(){
		let a = ( function(e:any) {
			if(e.width>e.height) {if (e.width>128) { e.height = e.height*(128 /e.width); e.width=128; }}
			else {if (e.height>128) { e.width = e.width*(128 /e.height); e.height=128; }}
		})
		let s:React.CSSProperties = {
			backgroundImage: 'url(../markdownImage/2017-01-31-16-20-31.png)',
			backgroundColor: '#f84',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			width: 'auto',
			height: '12rem',
		}
		return (
			<View>
				<View>
					{/*<Image path='../markdownImage/2017-01-31-17-02-39.png'>
					<div>aa</div>
					</Image>*/}
					<Image src='../markdownImage/2017-01-31-17-02-39.png'>
						aaa
					</Image>
					{/*<div style={s}>
						<div style={{color:'#fff'}}>test</div>
					</div>*/}
				</View>
			</View>
		)
	}
	componentDidMount = ()=>{}
	componentWillReceiveProps = (nextProps:IProps) =>{}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}
}




























