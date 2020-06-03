import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
  }

  // Toggle button click handler to change toggle state
  buttonClicked = () => {
    this.setState((state) => ({
      toggle: !state.toggle,
    }));
  };

  render() {
    // Conditional rendering
    const display = this.state.toggle ? (
      <ul>
        <li>File 1</li>
        <li>File 2</li>
        <li>File 3</li>
      </ul>
    ) : null;

    return (
      <div className="App">
        <h1>Folder Toggle</h1>
        {display}
        <button onClick={this.buttonClicked}>Toggle</button>
      </div>
    );
  }
}

export default App;
