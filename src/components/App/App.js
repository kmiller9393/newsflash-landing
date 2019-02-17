import React, { Component } from 'react';
import Intro from '../Intro/Intro';
import Features from '../Features/Features';
import Contact from '../Contact/Contact';
import { configureAnchors } from 'react-scrollable-anchor';
import './App.css';

export default class App extends Component {
  handleScroll = () => {
    configureAnchors({ scrollDuration: 350 });
  };

  render() {
    return (
      <div className="App">
        <Intro handleScroll={this.handleScroll} />
        <Features handleScroll={this.handleScroll} />
        <Contact handleScroll={this.handleScroll} />
      </div>
    );
  }
}
