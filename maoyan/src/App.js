import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footbar from './Components/Footbar';

class App extends Component {
  render() {
    return (
      <div className="App">

      	<Navbar/>

      	<main>
	        {
	        	this.props.children
	        }
        </main>

        <Footbar/>
      </div>
    )
  }
}

export default App;
