import React,{Component} from 'react';
import './index.css';
import axios from 'axios';
import path from '../../static/bg.png';
import {connect} from 'react-redux';

class Detail extends Component{
	constructor(){
		super();

		this.state={
			data:null
		}
	}

	render(){
		return <div id="detail">
			{
				this.state.data?
				<header style={{background:`url(${path})`,backgroundSize:'100% 100%'}}>
					<img src={this.state.data.img.replace('w.h','128.180')} alt=""/>
					<aside>
						<p className="p1">{this.state.data.nm}</p>
						<p className="p2">{this.state.data.enm}</p>
						{
							this.state.data.showst===3?
							<p className="p3"><span>{this.state.data.sc} </span>({(this.state.data.snum/10000).toFixed(1)}万人评)</p>
							:<p className="p7">{this.state.data.wish}人想看</p>
						}
						<p className="p4">{this.state.data.cat}</p>
						<p className="p5">{this.state.data.src}/{this.state.data.dur}分钟</p>
						<p className="p6">{this.state.data.pubDesc}</p>
					</aside>
				</header>
				:null
			}
		</div>
	}

	componentDidMount(){
		var id=this.props.match.params.id;
		
		axios.get(`/ajax/detailmovie?movieId=${id}`).then(res=>{
			// console.log(res.data.detailMovie);

			this.setState({
				data:res.data.detailMovie
			});
		});
	}
}

export default (
	null,
	{
		setTitle(data){
			return (dispatch)=>{
				dispatch({
					type:'setTitle',
					payload:data
				});
			}
		}
	}
)(Detail);