import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Cart count {this.props.totalCount}</Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    );
  }
}

export default Navigation;
