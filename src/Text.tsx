import * as React from 'react'
import {Layer} from './Layer'
import {tool} from './tool'

interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Text extends React.Component<IProps, IState> {
	static defaultProps = {};
	private css:React.CSSProperties = {}
	private rest:any;
	constructor(props: IProps){
		super(props)
		this.state = {}
		tool.setPhoneText(this.css)
		this.setprops(this.props)
	}
	componentWillMount(){}
	render(){
		return (
			<Layer style={this.css} {...this.rest}>{this.props.children}</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:IProps){
		this.setprops(nextProps)
	}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
	//
	setprops = (props: IProps)=> {
		const {style, ...rest} = props;
		this.rest = rest;
		if(!tool.pc) {
			this.css = tool.assign(this.css, style)
		} else {
			this.css = style
		}
	}
}