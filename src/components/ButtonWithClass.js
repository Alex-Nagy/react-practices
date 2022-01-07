import React, { Component } from "react";

class ButtonWithClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
        greeting: "Hello",
        title: "Main Title for class"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.greeting}</p>
        <button onClick={ () => this.setState({greeting: "Bye"})}>Click Me</button>
        <button onClick={ () => this.setState({title: "Bye"})}>Click Me</button>
      </div>
    );
  }
}

export default ButtonWithClass;
