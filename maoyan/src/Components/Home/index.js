import React,{Component} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class Home extends Component{
	render(){
		return <div id="home">
			<nav>
				<div>大连<i className="iconfont icon-moreunfold"></i></div>
				<div>
					<NavLink to="/home/nowplaying" activeClassName="homeActive">正在热映</NavLink>
					<NavLink to="/home/comingsoon" activeClassName="homeActive">即将上映</NavLink>
				</div>
				<div><i className="iconfont icon-search"></i></div>
			</nav>

			{
	        	this.props.children
	        }

		</div>
	}
}

export default Home;