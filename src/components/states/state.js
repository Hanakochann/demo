import React from "react";
import "./state.css"

class StateTest extends React.Component {
  constructor() {
    super();
    this.state = { age: 22 };
  }
  render() {
    setTimeout(() => {
      this.setState({ age: 23 });
    }, 3000);
    return (
      <div>
        <h3>Oops! Wait a minute! I'm</h3>
        <h2>{this.state.age}</h2>
      </div>
    );
  }
}

export default StateTest;
