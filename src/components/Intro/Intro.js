import React, { Component } from 'react';
import logo from '../../assets/images/newsflash-logo-light.png';
import downArrow from '../../assets/images/down-arrow.svg';
import './Intro.css';

export default class Intro extends Component {
  render() {
    return (
      <section className="home-info-container">
        <header className="home-header">
          <div>
            <img className="header-logo" src={logo} alt="logo" />
          </div>
          <div className="header-links-container">
            <a className="header-link" href="http://localhost:3001/">
              About
            </a>
            <a className="header-link" href="http://localhost:3001/">
              Sign Up
            </a>
            <a className="header-link" href="http://localhost:3001/">
              Contact
            </a>
          </div>
        </header>
        <article className="introduction-container">
          <h2 className="introduction-header">
            Find the news that matters to you.
          </h2>
          <p className="introduction-text">
            Easily share anything across the web and connect with those who
            share your passions.
          </p>
          <button className="introduction-button">
            Create your free account
          </button>
        </article>
        <footer className="home-intro-footer">
          <div className="more-info-container">
            <p className="arrow-text">More Info</p>
            <img src={downArrow} alt="more info" />
          </div>
        </footer>
      </section>
    );
  }
}
