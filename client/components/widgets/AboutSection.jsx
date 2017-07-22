import React, { PropTypes } from 'react'

const AboutSection = () => (
  <div>
    <div className="container content-section text-left">
      <h1>About CloudDezk</h1>
      <p>
        CloudDezk is formed by a team of AWS Solution Architects with years of experience
        using AWS platform and specialized in the security space.
      </p>
      <p>
        Our clients using AWS infrastructure in North America and Asia Pacific identified the
        need for tools to more effectively manage user and service access. The need for easy
        access and visibility including changes to access privileges across the organization
        are critical for a stable and secure AWS infrastructure.
      </p>
      <p>
        Our products are unique and we develop AWS security products unparalleled by any other
        AWS Security Services Provider. We are working on a number of AWS Security products the
        first out of the ranks is CloudAccess. For more information please click <a href='#about'>here</a>.
      </p>
    </div>
    <div className="container content-section">
      <h1>Data Privary</h1>
      <p>
        Your security data is exclusively locked and can only be accessed by you.
        CloudDezk entities or staff will not have access to your data once you subscribe
        and link to the cloudDezk tool. You will have access to all audit logs to ensure
        that cloudDesk staff intentionally or unintentionally access the data.
      </p>
      <p>
        The tool uses read only access priveledges to access your data.
        Data is encrypted using 256-bit Advanced Encryption Standard (AES-256).
      </p>
    </div>
  </div>
)

export default AboutSection;
