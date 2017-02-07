import * as React from 'react'
import {Layer} from './Layer'

export interface IImageProps extends React.HTMLProps<HTMLImageElement> {
	ref?:string,
}
interface IState {}

export class Image extends React.Component<IImageProps, IState> {
	public css:React.CSSProperties = {}
	private inCss:React.CSSProperties = {}
	public rest:IImageProps
	static defaultProps = {};
	constructor(props:IImageProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount(){}
	render(){
		this.combProps(this.props)
		return (
			<Layer>
				<img {...this.rest}></img>
				<Layer style={this.inCss}>
					{this.props.children}
				</Layer>
			</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:IImageProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}

	// ------------
	init = ()=>{
		this.css = {
			width:'100%',
			height:'auto',
		}
		this.inCss = {
			position: 'absolute',
		}
	}
	combProps = (props: IImageProps)=>{
		const {style, children, ...rest} = props
		this.css = {...this.css, ...style}
		this.rest = {...rest, style:this.css}
	}
}