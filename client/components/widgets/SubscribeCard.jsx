import React, { PropTypes } from 'react'

class SubscribeCard extends React.Component {
  render () {
    const { r } = this.props;
    return (
        <div className="card">
          <div className="card-header">
            <img src={r.imageUrl} />
          </div>
          <div className="card-body">
            <h4>{r.name}</h4>
            <p>{r.description}</p>
            <div className="card-price">
              { r.amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') }<span>/{ r.interval }</span>
            </div>
          </div>
          <div className="card-footer">
            <button className="btn btn-info">Subscribe</button>
          </div>
        </div>
    )
  }
}

export default SubscribeCard;
