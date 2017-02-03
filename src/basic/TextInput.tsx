import * as React from 'react'

export interface ITextInputProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class TextInput extends React.Component<ITextInputProps, IState> {
	static defaultProps = {};
	constructor(props:ITextInputProps){
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
	componentWillReceiveProps(nextProps:ITextInputProps){}
	shouldComponentUpdate(){ return true }
	componentWillUpdate(){}
	componentWillUnmount(){}
}