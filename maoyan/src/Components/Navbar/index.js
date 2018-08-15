import React,{Component} from 'react';
import './index.css';
import {connect} from 'react-redux';

class Navbar extends Component{
	render(){
		return <div id="navbar">
			<nav>{this.props.titleStatus}</nav>
		</div>
	}
}

export default connect(
	state=>{
		return {
			titleStatus:state.navReducer
		}
	},
	null
)(Navbar);