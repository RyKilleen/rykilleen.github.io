import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from "gatsby-link";

const propTypes = {
  structure: PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {
  structure: []
}

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      structure: this.props.structure
    }
  }
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>)
  }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
export default Navigation;