import React, { Component } from "react";

class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Shankar",
    };
  }
  handleClick = () => {
    this.setState({
      name: "Shiv",
    });
  };
  render() {
    return (
      <div>
        <h1>Im am Changing my name</h1>
        <h2>{this.state.name} </h2>
        <button onClick={this.handleClick}>Change name</button>
      </div>
    );
  }
}

export default Show;
