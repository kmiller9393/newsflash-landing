import React, { Component } from 'react';
import user from '../../assets/images/customer.svg';
import flexible from '../../assets/images/triple-arrow.svg';
import network from '../../assets/images/network.svg';
import reward from '../../assets/images/reward.svg';
import './Features.css';

export default class Features extends Component {
  render() {
    return (
      <div className="features-container">
        <h1 className="features-header">Features</h1>
        <section className="features-section">
          <div className="feature-container">
            <img src={user} alt="personalized" />
            <p className="features-content">
              Every single time you log into Newsflash - a curated list of
              relevant news links is created automatically for you, based on the
              most up-to-date technology combined with your personal
              preferences. Love anything sports related? We've got you covered.
              Had enough of Political Drama? You won't see it in your feed. YOU
              are in control of what news you consume
            </p>
          </div>
          <div className="feature-container">
            <img src={flexible} alt="control" />
            <p className="features-content">
              You are in control of what news links you see. Populate your
              favorites with the people, topics, and sources of news that you
              want to see, and filter out the people,topics, and sources that
              you can't stand.
            </p>
          </div>
          <div className="feature-container">
            <img src={network} alt="connect" />
            <p className="features-content">
              Easily connect with others via sharing of stories. Comment on
              posts that you respond to and meet new friends who feel the same
              way. Send messages in groups or in private to easily share
              information and get everyone on the same page!
            </p>
          </div>
          <div className="feature-container">
            <img src={reward} alt="rewarding" />
            <p className="features-content">
              The more immersed and involved you are on the Newsflash platform,
              the more good karma you receive as a user. Down the road, this
              karma will basically equal straight cash $$$. We at Newsflash
              believe that being a good person and being a connected,
              responsible citizen deserves all the rewards we as creators of
              this platform can possibly reward you with.
            </p>
          </div>
        </section>
      </div>
    );
  }
}
