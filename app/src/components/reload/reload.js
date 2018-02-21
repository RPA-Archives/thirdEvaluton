import React, { Component } from 'react';
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
          <img src="reload.png" className="reload-logo" />
        </div>
      </div>
    );
  }
}
export default Reload;
