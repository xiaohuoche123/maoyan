import React,{Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Nowplaying extends Component{
	render(){
		return <div id="nowplay">
			{
				this.props.nowList.map(item=>
					<article key={item.id}>
						<img src={item.img.replace('w.h','128.180')} alt=""/>
						<aside>
							<h3>{item.nm}
								{
									item.version!==''?
									<span id="imax">
										{
											item.version.split(' ')[0]?
											<i>{item.version.split(' ')[0].slice(1).toUpperCase()}</i>
											:null
										}
										{
											item.version.split(' ')[1]?
											<i>{item.version.split(' ')[1].toUpperCase()}</i>
											:null
										}
									</span>
									:null
								}
							</h3>
							<p>
								{
									item.sc!==0?
									<span>观众评<b>{item.sc}</b></span>
									:<span><b>{item.wish}</b>人想看</span>
								}
							</p>
							<p>主演：{item.star}</p>
							<p>{item.showInfo}</p>
							{
								item.globalReleased?
								<div id="goupiao">购票</div>
								:<div id="yushou">预售</div>
							}
						</aside>
					</article>
				)
			}
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
)(Nowplaying);