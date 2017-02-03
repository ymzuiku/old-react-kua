import * as React from 'react'

export interface ISwitchProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Switch extends React.Component<ISwitchProps, IState> {
	static defaultProps = {};
	constructor(props:ISwitchProps){
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
	componentWillReceiveProps(nextProps:ISwitchProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}