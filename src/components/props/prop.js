import React from "react";
import "./prop.css";

class PropTest extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Hi!</h2>
        <h2>My name fullname is {this.props.user.name} </h2>
        <h2>I'm {this.props.user.age}</h2>
      </div>
    );
  }
}

export default PropTest;
