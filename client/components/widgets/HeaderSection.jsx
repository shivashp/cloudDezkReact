import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = () => (
  <header className="intro">
    <div className="intro-body container">
      <div style={{textAlign:'left'}}>
        <h1 className="brand-heading">CloudDezk</h1>
        <p className="intro-text">
          The most reliable AWS Security Management Tools.
          <br />Peace of mind guaranteed.
          </p>
          <Link to="/register#top" className="btn btn-default btn-lg">Register Now</Link>
        </div>
      </div>
    </header>
)

export default HeaderSection;
