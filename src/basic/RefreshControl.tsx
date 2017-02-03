import * as React from 'react'

export interface IRefreshControlProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class RefreshControl extends React.Component<IRefreshControlProps, IState> {
	static defaultProps = {};
	constructor(props:IRefreshControlProps){
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
	componentWillReceiveProps(nextProps:IRefreshControlProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}