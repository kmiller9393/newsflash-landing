import React, { Component } from 'react';
import user from '../../assets/images/customer.svg';
import flexible from '../../assets/images/triple-arrow.svg';
import network from '../../assets/images/network.svg';
import reward from '../../assets/images/reward.svg';
import ScrollableAnchor from 'react-scrollable-anchor';
import downArrow from '../../assets/images/darkDown.svg';
import './Features.css';

export default class Features extends Component {
  render() {
    return (
      <ScrollableAnchor id="about">
        <div className="features-container">
          <h1 className="features-header">Features</h1>
          <section className="features-section">
            <div className="feature-container">
              <img src={user} alt="personalized" />
              <h3>Personalized</h3>
              <p className="features-content">
                Every single time you log into Newsflash, a curated list of
                relevant news stories is created automatically for you, based on
                your personal preferences. Love anything sports-related? We've
                got you covered. Had enough of political drama? You won't see it
                in your feed. With NewsFlash, you will only see the stories that
                are important to you.
              </p>
            </div>
            <div className="feature-container">
              <img src={flexible} alt="control" />
              <h3>Flexible</h3>
              <p className="features-content">
                You are in complete control of the content you see. Populate
                your reading list with the people, topics, and sources that you
                want to see and filter out the people, topics, and sources that
                you don't want to see.
              </p>
            </div>
            <div className="feature-container">
              <img src={network} alt="connect" />
              <h3>Social</h3>
              <p className="features-content bottom">
                You can easily connect with others by sharing stories with your
                network, comment on posts that interest you and meet new friends
                who feel the same way. Send messages in groups or in private to
                easily share information and get everyone on the same page!
              </p>
            </div>
            <div className="feature-container">
              <img src={reward} alt="rewarding" />
              <h3>Rewarding</h3>
              <p className="features-content bottom">
                The more immersed and involved you are on the Newsflash
                platform, the more good karma you receive as a user. As you gain
                more good karma, you will be rewarded. At Newsflash, we believe
                that being a good person and being a connected, responsible
                citizen deserves all the rewards we as creators of this platform
                can possibly reward you with.
              </p>
            </div>
          </section>
          <footer className="features-footer">
            <a
              className="contact-link-container"
              onClick={this.props.handleScroll}
              href="#contact"
            >
              <p className="arrow-features-text">Contact Info</p>
              <img className="info-image" src={downArrow} alt="contact info" />
            </a>
          </footer>
        </div>
      </ScrollableAnchor>
    );
  }
}
