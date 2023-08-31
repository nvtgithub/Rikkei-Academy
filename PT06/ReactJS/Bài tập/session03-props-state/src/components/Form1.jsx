import React, { Component } from 'react'

export default class Form1 extends Component {
  constructor() {
    super()
    this.state = {
      textInput: "",
    }
  }
  handleUpdateText = () => {
    const text = document.getElementById("input-text").value;
    this.setState({ textInput: text });
  }
  handleDisplay = () => {
    const text = this.state.textInput;
    const showText = document.getElementById("show-text").innerHTML = text;
    document.getElementById("input-text").value = "";
  }
  render() {
    return (
      <div>
        <input type="text" id="input-text" onChange={this.handleUpdateText} /><br />
        <button onClick={this.handleDisplay}>Click!!!</button>
        <p id="show-text"></p>
        <p>text - input: {this.state.textInput}</p>
      </div>
    )
  }
}