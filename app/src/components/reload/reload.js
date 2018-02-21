import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './reload.css';

class Reload extends Component {
  render() {
    return (
      <div className="relaod-error">
        <div className="reload-box">
          <div className="reload-error-message">
            {this.props.message1}
          </div>
          <div className="reload-error-message">
            {this.props.message2}
          </div>
          <img
            src="reload.png"
            className="reload-logo"
            alt="reload icon"
          />
        </div>
      </div>
    );
  }
}
export default Reload;

Reload.defaultProps = {
  message1: 'Some error occured',
  message2: 'Your devloper is great ;)',
};
Reload.propTypes = {
  message1: PropTypes.string,
  message2: PropTypes.string,
};
