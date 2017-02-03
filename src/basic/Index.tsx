import * as React from 'react'

export interface IIndexProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Index extends React.Component<IIndexProps, IState> {
	static defaultProps = {};
	constructor(props:IIndexProps){
		super(props)
		this.state = {}
	}
	componentWillMount = ()=>{}
	render(){
		return (
			<div {...this.props}>{this.props.children}</div>
		)
	}
	componentDidMount = ()=>{}
	componentWillReceiveProps = (nextProps:IIndexProps) =>{}
	shouldComponentUpdate = ()=>{ return true }
	componentWillUpdate = ()=>{}
	componentWillUnmount = ()=>{}
}