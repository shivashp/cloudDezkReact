import React, { PropTypes } from 'react'

const ContactSection = () => (
  <div className="container content-section">
    <h1>Contact CloudDezk</h1>
    <p>Feel free to email us if you have any require any additional information or you have any queries or recommendations. We would love to hear from you.</p>
    <p><a href="mailto:info@clouddezk.com">info@clouddezk.com</a>
  </p>
  <ul className="list-inline banner-social-buttons">
    <li>
      <a href="https://twitter.com/clouddezk" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
    </li>
    <li>
      <a href="https://facebook.com/clouddezk" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>
    </li>
    <li>
      <a href="https://plus.google.com/+clouddezk/posts" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">Google+</span></a>
    </li>
  </ul>
</div>
)
export default ContactSection;
