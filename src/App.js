import React, { Component } from "react";
import AppMain from "./pages/AppMain.jsx";



class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<AppMain />
				</div>

				{/* 
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
            */}
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
