import React, { Component } from 'react';
import logo from '../../assets/images/newsflash-logo-light.png';
import downArrow from '../../assets/images/down-arrow.svg';
import { configureAnchors } from 'react-scrollable-anchor';
import './Intro.css';

export default class Intro extends Component {
  handleClick = () => {
    window.open('https://newsflash-front.herokuapp.com/sign-up', '_blank');
  };

  handleScroll = () => {
    configureAnchors({ scrollDuration: 350 });
  };

  render() {
    return (
      <section className="home-info-container">
        <header className="home-header">
          <div>
            <img className="header-logo" src={logo} alt="logo" />
          </div>
          <div className="header-links-container">
            <a
              className="header-link"
              href="#about"
              onClick={this.handleScroll}
            >
              About
            </a>
            <a
              className="header-link"
              href="https://newsflash-front.herokuapp.com/sign-up"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </a>
            <a className="header-link" href="#contact">
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
          <button className="introduction-button" onClick={this.handleClick}>
            Create your free account
          </button>
        </article>
        <footer className="home-intro-footer">
          <a
            className="more-info-container"
            onClick={this.handleScroll}
            href="#about"
          >
            <p className="arrow-text">More Info</p>
            <img className="info-image" src={downArrow} alt="more info" />
          </a>
        </footer>
      </section>
    );
  }
}
