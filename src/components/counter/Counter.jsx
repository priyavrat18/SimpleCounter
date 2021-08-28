import React, { Component } from "react";
import "./Counter.css";
import propTypes from "prop-types";
import ModelComponent from "../ModelComponent";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showModel: false,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    this.confirmReset = this.confirmReset.bind(this);
    this.closeModel = this.closeModel.bind(this);
  }

  render() {
    return (
      <>
        <div className="Counter counterContainer">
          <CounterButton
            by={1}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <CounterButton
            by={5}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <CounterButton
            by={10}
            incrementMethod={this.increment}
            decrementMethod={this.decrement}
          />
          <span className="count">{this.state.counter}</span>
          <div>
            <button className="reset" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
        {this.state.showModel && (
          <ModelComponent
            message={"Do you really want to reset the counter?"}
            confirmReset={this.confirmReset}
            closeModel={this.closeModel}
          />
        )}
      </>
    );
  }
  reset() {
    this.setState({ showModel: true });
  }

  confirmReset() {
    this.setState({ counter: 0, showModel: false });
  }
  closeModel() {
    this.setState({ showModel: false });
  }

  increment(by) {
    //console.log(`increment from parent - ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  }
  decrement(by) {
    //console.log(`increment from parent - ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  }
}

class CounterButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="counter">
          <button onClick={() => this.props.incrementMethod(this.props.by)}>
            +{this.props.by}
          </button>
          <button onClick={() => this.props.decrementMethod(this.props.by)}>
            -{this.props.by}
          </button>
          {/*<span className="count">{this.state.counter}</span>*/}
        </div>
      </>
    );
  }
}

CounterButton.defaultProps = {
  by: 1,
};

CounterButton.propTypes = {
  by: propTypes.number,
};

export default Counter;
