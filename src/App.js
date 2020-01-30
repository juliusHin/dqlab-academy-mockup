import React, { Component } from 'react';
// import logo from './logo.svg';
import ReactDom from 'react-dom';


import PrimarySearchAppBar from './pages/navigation/AppBar';
import ProLangCard from './pages/content/ProLangCard';


class App extends Component{
  render(){
    return(
      <div className="App">
        <div id="navigationAndHeader">
          <PrimarySearchAppBar/>

        </div>
      </div>


    );
  }
}

export default App;


// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>