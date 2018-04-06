import React, { Component } from 'react';
import './App.css';
import NewsDashboard from './views/NewsDashboard/NewsDashboard.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
         <NewsDashboard />
      </div>
    );
  }
}

export default App;
