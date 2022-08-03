import React, { Component } from 'react';
import './App.css';

import { DatePicker } from 'antd';

import { CompOne, CompTwo } from '@union-cli/components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hot Reload Your Workspaces</h2>
          <div className="components">
            <CompOne />
            <CompTwo />
            <DatePicker />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
