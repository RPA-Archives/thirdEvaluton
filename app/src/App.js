import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar.js';
import Reload from './components/reload/reload.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Reload message1="Oops! No books found!" message2="Import them now ?" />
      </div>
    );
  }
}
export default App;
