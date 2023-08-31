import React, { Component } from "react";
import Form from "./Form";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
    };
  }
  
  render() {
    return (
      <div>
        <Form keyText={this.sta}/>
        <p></p> 
      </div>
    );
  }
}
