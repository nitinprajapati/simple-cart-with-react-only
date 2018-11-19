import React, { Component } from "react";
class Counter extends Component {
  showZero() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }

  badgeClass() {
    let classs = "label label-";
    classs += this.props.counter.value <= 0 ? "warning" : "primary";
    return classs;
  }

  render() {
    return (
      <div className="row" style={{ marginBottom: 10 }}>
        <div className="col-md-1">
          <span className={this.badgeClass()}>{this.showZero()}</span>
        </div>
        <div className="col-md-1">
          <button
            className="btn btn-default"
            onClick={() => this.props.increment(this.props.counter.id)}
          >
            <span className="glyphicon glyphicon-plus" />
          </button>
        </div>
        <div className="col-md-1">
          <button
            className="btn btn-default m2"
            onClick={() => this.props.decrement(this.props.counter.id)}
          >
            <span className="glyphicon glyphicon-minus" />
          </button>
        </div>
        <div className="col-md-1">
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
