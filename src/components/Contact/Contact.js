import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import adam from '../../assets/images/sunshine.png';
import kurt from '../../assets/images/miller.png';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <ScrollableAnchor id="contact">
        <div className="contact-container">
          <h1 className="contact-header">Let's Get In Touch</h1>
          <section className="contact-content-container">
            <article className="founder-container">
              <img
                className="founder-image"
                src={adam}
                alt="newsflash founder"
              />
              <p className="email-text">
                Email:{' '}
                <a className="founder-link" href="mailto:adam@example.com">
                  adam@example.com
                </a>
              </p>
            </article>
            <article className="founder-container">
              <img
                className="founder-image"
                src={kurt}
                alt="newsflash founder"
              />
              <p className="email-text">
                Email:{' '}
                <a className="founder-link" href="mailto:kurt@example.com">
                  kurt@example.com
                </a>
              </p>
            </article>
          </section>
          <footer className="contact-footer">
            <a
              className="back-home-link"
              onClick={this.props.handleScroll}
              href="#home"
            >
              Back to Top
            </a>
          </footer>
        </div>
      </ScrollableAnchor>
    );
  }
}
