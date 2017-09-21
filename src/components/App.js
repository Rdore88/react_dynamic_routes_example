import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from "./Header"
import Footer from './Footer.js'

class App extends Component {
  render() {
    return (
      <div className="app">
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

export default App;
