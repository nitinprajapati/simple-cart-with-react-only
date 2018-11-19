import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div className="container">
        <div className="row col-md-12" style={{ marginBottom: 10 }}>
          <button
            className="btn btn-primary"
            onClick={() => this.props.resetBtn()}
          >
            Reset
          </button>
        </div>

        {this.props.counter.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            increment={this.props.increment}
            decrement={this.props.decrement}
            handleDelete={this.props.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
