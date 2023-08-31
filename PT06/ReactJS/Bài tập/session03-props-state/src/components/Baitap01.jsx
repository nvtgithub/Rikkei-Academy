import React, { Component } from "react";

export default class Baitap01 extends Component {
    constructor() {
        super();
        this.state = {
            text: "Xin chào Nguyễn Văn Tiến!",
            toggle: false,
        };
    }
    handleChangeText = () => {
        this.setState({ text: "Welcome Nguyen Van Tien!" });
    };
    render() {
        const { text, toggle } = this.state;
        return (
            <div>
                <p>Text: {text}</p>
                <button onClick={this.handleChangeText}>Click here</button>
            </div>
        );
    }
}
