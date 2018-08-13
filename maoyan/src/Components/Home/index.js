import React,{Component} from 'react';
import './index.css';

class Home extends Component{
	render(){
		return <div>
			home
			{this.props.children}
		</div>
	}
}

export default Home;