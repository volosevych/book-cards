import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Jumb from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Jumb/>
        </div>
      </Router>
    );
  }
}

export default App;
