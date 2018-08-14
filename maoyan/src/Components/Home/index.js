import React,{Component} from 'react';
import './index.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import axios from 'axios';

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
			<section>
				{
					this.props.nowList.map(item=>
						<article key={item.id}>
							<img src={item.img.replace('w.h','128.180')}/>
							<aside>
								<h3>{item.nm}</h3>
							</aside>
						</article>
					)
				}
				
			</section>
		</div>
	}

	componentDidMount(){
		if(this.props.nowList.length===0){
			this.props.firstRequestData();
		}
	}
}

export default connect(
	state=>{
		return {
			nowList:state.nowReducer
		}
	},

	{
		firstRequestData(){
			return (dispatch)=>{
				axios.get("/ajax/movieOnInfoList?token=").then((res)=>{
					console.log(res.data.movieList);

					dispatch({
						type:'nowlist',
						payload:res.data.movieList
					});
				});
			}
		}
	}
)(Home);