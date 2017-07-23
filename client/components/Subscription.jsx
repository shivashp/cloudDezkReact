import React from 'react'
import { cfg } from '../config/production.js';
import SubscribeCard from './widgets/SubscribeCard.jsx';
function subscribe(plan) {

//    console.log(window.StripeCheckout);

    if (window.StripeCheckout == undefined) return false;

    var handler = window.StripeCheckout.configure({
        key: cfg.stripeKey,
        locale: 'auto',
        token: (token) => {
        console.log("Token: ", token);
        this.plansService.createSubscription(token, plan.id)
        .then(res => {
        // console.log(res);
        alert("Successfully subscribed to " + plan.name);
    }).catch(error => {
        console.log(error);
        this.handleError(error)

    });
    }
    });

        handler.open({
            name: 'CloudDezk',
            description: plan.description,
            amount: plan.amount * 100,
            allowRememberMe: false,
            zipCode: true,
            billingAddress: true,
            panelLabel: 'Subscribe to ' + plan.name,
            image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
           // closed:    handler.close()
        });

        window.addEventListener('popstate', function() {
            closed:    handler.close()
        });
}

const plans=[
        {
            "amount": 200,
            "created": 1499052797,
            "currency": "usd",
            "description": "Diamond",
            "id": "advanced-monthly",
            "imageUrl": "http://placehold.it/800x500",
            "interval": "month",
            "interval_count": 1,
            "name": "Advanced Plan",
            "statement_descriptor": "CloudDezk Subscription",
            "trial_period_days": null
        },
        {
            "amount": 100,
            "created": 1499052794,
            "currency": "usd",
            "description": "Gold",
            "id": "intermediate-monthly",
            "imageUrl": "http://placehold.it/800x500",
            "interval": "month",
            "interval_count": 1,
            "name": "Intermediate Plan",
            "statement_descriptor": "CloudDezk Subscription",
            "trial_period_days": null
        },
        {
            "amount": 50,
            "created": 1499052791,
            "currency": "usd",
            "description": "Platinum",
            "id": "basic-monthly",
            "imageUrl": "http://placehold.it/800x500",
            "interval": "month",
            "interval_count": 1,
            "name": "Basic Plan",
            "statement_descriptor": "CloudDezk Subscription",
            "trial_period_days": null
        },
        // {
        //     "amount": 0,
        //     "created": 1499052788,
        //     "currency": "usd",
        //     "description": "Silver",
        //     "id": "free",
        //     "imageUrl": "http://placehold.it/800x500",
        //     "interval": "month",
        //     "interval_count": 1,
        //     "name": "Free",
        //     "statement_descriptor": "CloudDezk Subscription",
        //     "trial_period_days": null
        // }
    ]


class Subscription extends React.Component {
  render () {
    return (
      <div className="register-form">
        <div className="sub-nav-details">Subscribe to one of our affordable Plans</div>
              {
                  plans.map(function(r,i) {
                    return <div className="col-md-4">
                        <SubscribeCard r={r} key={i}/>
                    </div>

                      return <div key={i} className="col-md-4 col-sm-6 hero-feature">
                          <div className="thumbnail">
                              <img src={r.imageUrl} alt="subscription plan image" />
                              <div className="caption">
                                  <p><b>{r.name}</b><br />{r.description}</p>
                                  <p>
                                      Cost: ${ r.amount.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') }/{ r.interval }
                                  </p>
                                  <p className="text-center"/>
                                  <button className="btn btn-default btn-lg" onClick={ ()=> subscribe(r)}>Subscribe</button>
                              </div>
                          </div>
                      </div>

                  })
              }
      </div>
    )
  }
}

export default Subscription;
