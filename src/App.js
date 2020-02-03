import React, { Component } from "react";
import "./App.css";
import Home from "./pages/content/Home.jsx";
import AppBarHeader from "./pages/navigation/AppBarHeader.jsx";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}
	render() {
		return (
			<div className="App">
				<AppBarHeader isOpen={this.state.open} />

				<Home isOpen={this.state.open} />
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
