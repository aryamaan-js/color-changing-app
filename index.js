import React from "react";
import ReactDOM from "react-dom";

class ColorApp extends React.Component {
  constructor() {
    super();
    this.state = {
      styles: {
        color: "white",
        h1: {
          fontFamily: "Arial",
        },
      },
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.state.styles = {
      color: document.getElementById("colors").value,
    };
    document.getElementById("root").style.background = this.state.styles.color;
  }
  render() {
    return (
      <div>
        <h1 style={this.state.styles.h1}>Color Change</h1>
        <select id="colors" onChange={this.changeColor}>
          <option value="white">Blank</option>
          <option value="#f59893">Red</option>
          <option value="#988df7">Blue</option>
          <option value="#94f78d">Green</option>
          <option value="#f7f58d">Yellow</option>
        </select>
      </div>
    );
  }
}

ReactDOM.render(<ColorApp />, document.getElementById("root"));
