import React, { Component } from 'react';
// import logo from './logo.svg';
import ReactDom from 'react-dom';
import { 
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import Home from './pages/content/Home';

import PrimarySearchAppBar from './pages/navigation/AppBar';
import ProLangCard from './pages/content/Home';


class App extends Component{
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <PrimarySearchAppBar/>
        </div>

        {
            /* 
            <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link></li>
          </ul>
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Redirect to="/" />
          </Switch>
        </div>
            */

        }
        
        
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