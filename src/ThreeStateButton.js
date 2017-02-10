import React, { Component, PropTypes } from 'react';

export default class ThreeStateButton extends Component {
    constructor(props) {
        super(props)
        this.state = { value: this.props.value }
    }

    render() {
        return (
            <div
                onClick={this.handleClick.bind(this)}
                style={this.buttonStyles()}
            >
                <span style={this.colorStyles()}></span>
                <label style={{cursor: "inherit"}}>
                  {this.buttonText()}
                  <input type="hidden" value={this.state.value} />
                </label>
            </div>
        );
    }

    handleClick(event) {
        this.setState({ value: this.nextValue() })
    }

    nextValue() {
        return (this.state.value + 1) % 3
    }

    colorStyles() {
        return {
            height: "10px",
            width: "10px",
            display: "inline-block",
            backgroundColor: this.currentColor(),
            marginRight: "5px"
        }
    }

    buttonStyles() {
        return {
            border: "1px solid #666",
            background: "#eee",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            display: "inline-block",
        }
    }

    currentColor() {
        let values = ["grey", "green", "red"];
        return values[this.state.value];
    }

    buttonText() {
        let values = ["Use default", "Enabled", "Disabled"];
        return values[this.state.value];
    }
}
