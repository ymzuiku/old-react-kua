import * as React from 'react'
import {Layer} from './Layer'
import {tool} from '../tool'

interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class View extends React.Component<IProps, IState> {
	static defaultProps = {};
	private css:React.CSSProperties = {}
	private rest:any;
	constructor(props: IProps){
		super(props)
		this.state = {}
		tool.setPhoneView(this.css)
		this.combProps(this.props)
	}
	componentWillMount(){}
	render(){
		return (
			<Layer style = {this.css} {...this.rest}>{this.props.children}</Layer>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps = (nextProps: IProps)=>{
		let self = this
		this.combProps(nextProps);
	}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}
	combProps = (props: IProps)=> {
		const {style, ...rest} = props;
		this.rest = rest;
		if(tool.pc) {
			this.css = style
		} else {
			this.css = tool.assign(this.css, style)
		}
	}
	
}