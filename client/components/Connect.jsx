import React, { PropTypes } from 'react'

class Connect extends React.Component {
  render () {
    return (
      <div className="register-form">
        <div className="sub-nav-details">Create an AWS IAM role granting cloudDezk ReadOnly privileges.</div>
        <div className="connect-content">
          <h4>POLICY ADVISOR</h4>
          <p>Please click the following link to connect to your <a href="#">PolicyAdvisor CloudDezk</a></p><br />
          <h4>POLICY SIMULATOR</h4>
          <p>Please click the following link to connect to your <a href="#">Policy Simulator CloudDezk</a></p>
        </div>
      </div>
    )
  }
}

export default Connect;
