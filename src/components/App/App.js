import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import Features from '../Features/Features';
import Contact from '../Contact/Contact';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Features />
        <Contact />
      </div>
    );
  }
}
