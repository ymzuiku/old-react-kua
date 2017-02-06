import * as React from 'react'

export interface IRecyclerViewProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}
//Recycler
export class RecyclerView extends React.Component<IRecyclerViewProps, IState> {
	static defaultProps = {};
	constructor(props:IRecyclerViewProps){
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
	componentWillReceiveProps(nextProps:IRecyclerViewProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}