import * as React from 'react'
import {Button} from './Button'

export interface ICheckBoxProps extends React.HTMLProps<HTMLElement> {
	ref?:string,
}
interface IState {}

export class Checkbox<P, S> extends Button<ICheckBoxProps, IState> {
	static defaultProps = {};
	constructor(props:ICheckBoxProps){
		super(props)
		this.state = {}
	}
	componentWillMount():void {}
	render():any {
		return (
			<Button {...this.props}>{this.props.children}</Button>
		)
	}
	componentDidMount():void {}
	componentWillReceiveProps(nextProps:ICheckBoxProps):void {}
	shouldComponentUpdate():boolean { return true }
	componentWillUpdate():void {}
	componentWillUnmount():void {}
}

