import React, { Component } from 'react'

export default class Form extends Component {
    handleUpdateText = () => {
        this.setState({ textInput: document.getElementById("input-text").value });
    };
    handleDisplay = (e) => {
        e.preventDefault(); // huỷ cách xử lý của trình duyệt khi sự kiện xảy ra
        const text = this.state.textInput;
        const showText = (document.getElementById("show-text").innerHTML = text);
        document.getElementById("input-text").value = "";
    };
    render() {
        return (
            <div>
                <form>
                    <input type="text" id="input-text" onChange={this.handleUpdateText} />
                    <button onClick={this.keyHandle1}>Click me!!!</button>
                    <p id="show-text"></p>
                </form>
            </div>
        )
    }
}