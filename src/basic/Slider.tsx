import * as React from 'react'

export interface ISliderProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Slider extends React.Component<ISliderProps, IState> {
	static defaultProps = {};
	constructor(props:ISliderProps){
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
	componentWillReceiveProps(nextProps:ISliderProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}