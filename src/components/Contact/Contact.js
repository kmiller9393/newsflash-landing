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
          <h1 className="contact-header">Contact</h1>
          <div className="contact-content-container">
            <div className="founder-container">
              <img
                className="founder-image"
                src={adam}
                alt="newsflash founder"
              />
              <p className="email-text">
                <a className="founder-link" href="mailto:adam@example.com">
                  adam@example.com
                </a>
              </p>
            </div>
            <div className="founder-container">
              <img
                className="founder-image"
                src={kurt}
                alt="newsflash founder"
              />
              <p className="email-text">
                email:{' '}
                <a className="founder-link" href="mailto:kmiller9393@gmail.com">
                  kmiller9393@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
