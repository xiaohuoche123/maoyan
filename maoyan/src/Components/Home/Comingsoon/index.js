import React,{Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import axios from 'axios';

class Comingsoon extends Component{
	render(){
		return <div id="coming">
			<section>
				coming
			</section>
		</div>
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