import * as React from 'react'

export interface IListViewProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}	
interface IState {}

export class ListView extends React.Component<IListViewProps, IState> {
	static defaultProps = {};
	constructor(props:IListViewProps){
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
	componentWillReceiveProps(nextProps:IListViewProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}