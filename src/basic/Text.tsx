import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'

export interface ITextProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Text extends React.Component<ITextProps, IState> {
	static defaultProps = {};
	private css:React.CSSProperties = {}
	private rest:ITextProps = {}
	constructor(props: ITextProps){
		super(props)
		this.state = {}
		tool.setPhoneText(this.css)
		this.combProps(this.props)
	}
	componentWillMount(){}
	render(){
		return (
			<Layer {...this.rest}>{this.props.children}</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:ITextProps){
		this.combProps(nextProps)
	}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
	//
	combProps = (props: ITextProps)=> {
		const {style, ...rest} = props;
		this.css = {...this.css, ...style}
		this.rest = {...rest, style:this.css}
	}
}