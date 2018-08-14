import React,{Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Comingsoon extends Component{
	render(){
		return <div id="coming">
			<div id="scroll">
				<h4>近期最受期待</h4>
				<ul onTouchStart={this.handleTouch.bind(this)}>
					{
						this.props.swipelist.map((item)=>
							<li key={item.id}>
								<img src={item.img.replace('w.h','128.180')} alt=""/>
								<div className="mask"></div>
								<p className="first">{item.wish}人想看</p>
								<p className="second">{item.nm}</p>
								<p className="third">{item.comingTitle.split(' ')[0]}</p>
							</li>
						)
					}
				</ul>
			</div>
		</div>
	}

	handleTouch(){
		console.log(this);

		// var ul=document.querySelector('ul');
		// var count=this.props.swipelist.length;
		// ul.style.width=98*count/100+'rem';
		// var downX=e.changedTouches['0'].clientX;
		// var downLeft=small.offsetLeft;
		
		// window.ontouchmove=function(e){
		// 	var diffX=e.changedTouches['0'].clientX-downX;
		// 	var realLeft=small.offsetLeft;
		// 	var max=-(120*count-window.screen.width*2.4);

		// 	if(small!==null){
		// 		if(realLeft>=0 && diffX>0){
		// 			small.style.left = '0px';
		// 		}else if(realLeft<max){
		// 			small.style.left = max+'px';
		// 		}else{
		// 			small.style.left = downLeft + diffX + 'px';
		// 		}
		// 	}
			
		// }

		// window.ontouchend = function (e) {
		// 	window.ontouchmove = null;
		// 	window.ontouchend = null;
		// }
	}

	componentDidMount(){
		if(this.props.cominglist.length===0){
			this.props.comingRequest();
		}

		if(this.props.swipelist.length===0){
			this.props.swipeRequest();
		}
	}
}

export default connect(
	state=>{
		return {
			cominglist:state.comingReducer,
			swipelist:state.swipeReducer
		}
	},

	{
		comingRequest(){
			return axios.get("/ajax/comingList?ci=65&token=&limit=10").then(res=>{
				console.log("coming",res.data.coming);
				return {
					type:'cominglist',
					payload:res.data.coming
				}
			});
		},

		swipeRequest(){
			return axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token=").then(res=>{
				console.log("swipe",res.data.coming);
				return {
					type:'swipelist',
					payload:res.data.coming
				}
			});
		}
	}
)(Comingsoon);