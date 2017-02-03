import * as React from 'react'

export interface IVideoProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Video extends React.Component<IVideoProps, IState> {
	static defaultProps = {};
	constructor(props:IVideoProps){
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
	componentWillReceiveProps(nextProps:IVideoProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}