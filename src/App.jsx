import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        {
          id: 1,
          value: 1
        },
        {
          id: 2,
          value: 5
        },
        {
          id: 3,
          value: 1
        },
        {
          id: 4,
          value: 1
        }
      ]
    };
  }

  increment = id => {
    const counters = this.state.counters.map(c => {
      c.value = c.id === id ? (c.value += 1) : c.value;
      return c;
    });
    this.setState({
      counters
    });
  };

  decrement = id => {
    const counters = this.state.counters.map(c => {
      let newValue = c.id === id ? (c.value -= 1) : c.value;

      c.value = newValue < 0 ? 0 : newValue;
      return c;
    });
    this.setState({
      counters
    });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({
      counters
    });
  };

  resetBtn = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({
      counters
    });
  };

  render() {
    return (
        <React.Fragment>
          <Navbar
            totalCount={this.state.counters.filter(c => c.value > 0).length}
          />
          <Counters
            counter={this.state.counters}
            increment={this.increment}
            decrement={this.decrement}
            handleDelete={this.handleDelete}
            resetBtn={this.resetBtn}
          />
        </React.Fragment>
    );
  }
}

export default App;
