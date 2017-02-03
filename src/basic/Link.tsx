import * as React from 'react'

export interface ILinkProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Link extends React.Component<ILinkProps, IState> {
	static defaultProps = {};
	constructor(props:ILinkProps){
		super(props)
		this.state = {}
	}
	componentWillMount(){}
	render(){
		return (
			<div {...this.props}>{this.props.children}</div>
		)
	}
	componentDidMount(){}
	componentWillReceiveProps(nextProps:ILinkProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}