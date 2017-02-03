import * as React from 'react'
import {Layer} from './Layer'

export interface IImageBackgroundProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
	backgroundImage:string,
}
interface IState {}

export class ImageBackground extends React.Component<IImageBackgroundProps, IState> {
	public css:React.CSSProperties = {}
	public rest:any
	static defaultProps = {};
	constructor(props:IImageBackgroundProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.combProps(this.props)
		return (
			<Layer {...this.rest}>{this.props.children}</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:IImageBackgroundProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}

	// ------------
	init = ()=>{

	}
	combProps = (props: IImageBackgroundProps)=>{
		const {style, backgroundImage, ...rest} = props
		this.css = {
			backgroundImage: `url(${this.props.backgroundImage})`,
			backgroundColor: '#f84',
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'cover',
			width: '100%',
			height: '10rem',
			...style, 
		}
		this.rest = {style:this.css, ...rest}
		console.log(this.css.backgroundImage)
	}
}