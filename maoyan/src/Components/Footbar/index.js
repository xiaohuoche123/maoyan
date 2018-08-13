import React,{Component} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';

class Footbar extends Component{
	render(){
		return <div id="footer">
			<ul>
				<li>
					<NavLink to="/home" activeClassName="active">
						<i class="iconfont icon-color"></i>
						<p>电影</p>
					</NavLink>
				</li>
				<li>
					<NavLink to="/cinema" activeClassName="active">
						<i class="iconfont icon-box"></i>
						<p>影院</p>
					</NavLink>
				</li>
				<li>
					<NavLink to="/my" activeClassName="active">
						<i class="iconfont icon-account"></i>
						<p>我的</p>
					</NavLink>
				</li>
			</ul>
		</div>
	}
}

export default Footbar;