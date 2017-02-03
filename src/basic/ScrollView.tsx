import * as React from 'react'

export interface IScrollViewProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class ScrollView extends React.Component<IScrollViewProps, IState> {
	static defaultProps = {};
	constructor(props:IScrollViewProps){
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
	componentWillReceiveProps(nextProps:IScrollViewProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}