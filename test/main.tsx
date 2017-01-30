//这里使用react-router对SAP应用进行跳转
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactRouter from 'react-router'
const { Router, Route, IndexRoute, hashHistory } = ReactRouter

import {View, tool} from '../YmUIKit'
tool

class Test extends React.Component<undefined, undefined> {
	render(){
		return <View>Hello TypeScript</View>
	}
}

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path='/' component={Test}></Route>
	</Router>
), document.getElementById('root'))