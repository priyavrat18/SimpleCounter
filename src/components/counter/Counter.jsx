import React, { Component } from "react";
import "./Counter.css";
import propTypes from "prop-types";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <CounterButton />
        <CounterButton by={5} />
        <CounterButton by={10} />
      </div>
    );
  }
}

class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.decrement}>-{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
        <button onClick={this.increment}>+{this.props.by}</button>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + this.props.by,
    });
  }

  decrement() {
    this.setState({
      counter: this.state.counter - this.props.by,
    });
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: propTypes.number,
};

export default Counter;
