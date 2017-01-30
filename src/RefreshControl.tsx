import * as React from 'react'

interface IProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class RefreshControl extends React.Component<IProps, IState> {
	static defaultProps = {};
	constructor(props:IProps){
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
	componentWillReceiveProps(nextProps:IProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}