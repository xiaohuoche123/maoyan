import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footbar from './Components/Footbar';

class App extends Component {
  render() {
    return (
      <div clasName="App">

      	<Navbar/>

      	<section>
	        {
	        	this.props.children
	        }
        </section>

        <Footbar/>
      </div>
    );
  }
}

export default App;
