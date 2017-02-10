
import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  render () {
    const { animals } = this.props;
    return (
        <h1 className="header"> Animals are great! </h1>
    )
  }
}

Header.propTypes = {
}
