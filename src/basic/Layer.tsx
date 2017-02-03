import * as React from 'react'

export interface ILayerProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Layer extends React.Component<ILayerProps, IState> {
	static defaultProps = {};
	constructor(props:ILayerProps){
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
	componentWillReceiveProps(nextProps:ILayerProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}