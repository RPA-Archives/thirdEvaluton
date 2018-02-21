import React, { Component } from 'react';
import './sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <div className="sidebar-name">
            Bs
          </div>
          <div className="sidebar-icons">
            <img src="reload.png" />
            <img src="setting.png" />
          </div>
        </div>
        <img src="./logo.png" className="book-logo" />
      </div>
    );
  }
}
export default Sidebar;
