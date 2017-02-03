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
	private rest:any;
	constructor(props: ITextProps){
		super(props)
		this.state = {}
		tool.setPhoneText(this.css)
		this.combProps(this.props)
	}
	componentWillMount(){}
	render(){
		return (
			<Layer style={this.css} {...this.rest}>{this.props.children}</Layer>
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
		this.rest = rest;
		if(!tool.pc) {
			this.css = tool.assign(this.css, style)
		} else {
			this.css = style
		}
	}
}