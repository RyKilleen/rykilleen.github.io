import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    structure : PropTypes.arrayOf(PropTypes.object)
};

const defaultProps = {
    structure: []
}

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            structure : this.props.structure
        }
    }
    render() {
        return (<h1>Nav</h1>)
    }
}

Navigation.propTypes = propTypes;
Navigation.defaultProps = defaultProps;
export default Navigation;