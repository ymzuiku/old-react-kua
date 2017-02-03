import * as React from 'react'

export interface IImageProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Image extends React.Component<IImageProps, IState> {
	static defaultProps = {};
	constructor(props:IImageProps){
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
	componentWillReceiveProps(nextProps:IImageProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}