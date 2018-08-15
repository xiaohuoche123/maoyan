import React,{Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Comingsoon extends Component{
	render(){
		return <div id="coming">
			<div id="scroll">
				<h4>近期最受期待</h4>
				<ul id="horizontal" onTouchStart={this.handleTouch.bind(this)}>
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

			<div id="vertical">
				{
					this.props.cominglist.map(item=>
						<div key={item.id}>
						{
							item.comingTitle!==''?
							<h4>{item.comingTitle}</h4>
							:null
						}
						<article>
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
										<span>点映评<b>{item.sc}</b></span>
										:<span><b>{item.wish}</b>人想看</span>
									}
								</p>
								<p>主演：{item.star}</p>
								<p>{item.rt}上映</p>
								{
									item.showst===4?
									<div id="goupiao">预售</div>
									:<div id="yushou">想看</div>
								}
							</aside>
						</article>
						</div>
					)
				}
			</div>
		</div>
	}

	handleTouch(){
		var self=this;
		window.ontouchstart=function(e){
			// console.log("start");
			var ul=document.querySelector('#horizontal');
			var count=self.props.swipelist.length;
			ul.style.width=98*count/100+'rem';
			var downX=e.changedTouches['0'].clientX;
			var downLeft=ul.offsetLeft;

			window.ontouchmove=function(e){
				// console.log("move");
				var diffX=e.changedTouches['0'].clientX-downX;
				var realLeft=ul.offsetLeft;
				var max=-(98*count-window.screen.width);

				if(ul!==null){
					if(realLeft>=0 && diffX>0){
						ul.style.left = '0px';
					}else if(realLeft<=max){
						if(realLeft===max && diffX>0){
							ul.style.left = downLeft + diffX + 'px';
						}else{
							ul.style.left = max+'px';
							window.ontouchmove = null;
						}
					}else{
						ul.style.left = downLeft + diffX + 'px';
					}
				}
			}

			window.ontouchend = function (e) {
				// console.log("end");
				window.ontouchstart=null;
				window.ontouchmove = null;
				window.ontouchend = null;
			}
		}
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
				// console.log("coming",res.data.coming);

				
				//按日期分类显示核心代码
				//同一个日期的影片只保留第一个的日期
				//其他的影片日期设置为空(comingTitle属性)
				//渲染时判断是否为空，为空则不渲染

				var list=res.data.coming;
				var title='';
				var arr=[];
				
				//遍历出同一日期所有影片中，第一个影片的索引
				list.map((item,index)=>{
					if(item.comingTitle!==title){
						arr.push(index);
						title=list[index].comingTitle;
					}
					return null;
				});

				//将同一日期中除第一个影片外的所有影片日期设置为空
				for(var i=0;i<list.length;i++){
					if(arr.indexOf(i)===-1){
						list[i].comingTitle='';
					}
				}

				return {
					type:'cominglist',
					payload:list
				}
				

				// return {
				// 	type:'cominglist',
				// 	payload:res.data.coming
				// }
			});
		},

		swipeRequest(){
			return axios.get("/ajax/mostExpected?ci=65&limit=10&offset=0&token=").then(res=>{
				// console.log("swipe",res.data.coming);
				return {
					type:'swipelist',
					payload:res.data.coming
				}
			});
		}
	}
)(Comingsoon);