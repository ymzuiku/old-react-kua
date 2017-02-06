import * as React from 'react'

export interface ILayerProps extends React.HTMLProps<HTMLElement> {
	ref?:string
}
interface IState {}

export class Layer<P, S> extends React.Component<ILayerProps, IState> {
	static defaultProps = {};
	constructor(props:ILayerProps){
		super(props)
		this.state = {}
		this.init()
	}
	componentWillMount():void {}
	render(){
		return (
			<div {...this.props}>{this.props.children}</div>
		)
	}
	componentDidMount():void {}
	componentWillReceiveProps(nextProps:ILayerProps):void {}
	shouldComponentUpdate():boolean { return true }
	componentWillUpdate():void {}
	componentWillUnmount():void {}
	init = ()=>{}
}