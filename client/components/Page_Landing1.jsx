import React from 'react';
import { Link } from 'react-router-dom';
import ScrollableAnchor from 'react-scrollable-anchor'
//configureAnchors({offset: -60, scrollDuration: 200})
import { cfg } from '../config/production.js';

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



const Page_Landing1= () => (
<div>
{/*Intro Header*/}
    <header className="intro">
        <div className="intro-body">

                <div className="row col-xs-offset-1" style={{textAlign:'left'}}>

                        <h1 className="brand-heading">CloudDezk</h1>
                        <p className="intro-text">
                            The most reliable AWS Security Management Tools.
                            <br />Peace of mind guaranteed.
                        </p>
                        {/*<a href="#about" className="btn btn-circle page-scroll">*/}
                            {/*<i className="fa fa-angle-double-down animated"></i>*/}
                        {/*</a>*/}
<a href="/register#top" className="btn btn-default btn-lg">Register Now</a>
                </div>

        </div>
    </header>
{/*About Section*/}
<ScrollableAnchor id="scroll_about">
<section id="about" className="container content-section text-left">
    <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h2>About CloudDezk</h2>
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
        <div className="col-lg-8 col-lg-offset-2" id="data-privacy">
            <h4>Data Privary</h4>
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
</section>
</ScrollableAnchor>
    <ScrollableAnchor id="scroll_cloudaccess">
<section id="cloudaccess" className="container content-section text-left">
    <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h2>What we do</h2>
            <p>
                Would you like to <u>easily view who as access</u> to <u>what infrastructure and services</u> in your AWS account?
            </p>
            <p>
                Would you like to <u>search by an individual</u> for the specific access he or she has
                in your AWS environment?
            </p>
            <p>
                Would you like to check who has access to <u>critical resources</u> and <u>critical actions</u> which has huge security implications to your AWS infrastructure?
            </p>
            <p>
                Access to AWS resources is a consolidated outcome of a number of policies spread
                across AWS IAM and some services. Our tool gives you an <u>easily comprehensible
                view</u> of access privileges in your AWS account besides easily <u>search</u> for specific
                access to a user or a specific resource and also the specific actions that a user
                is allowed to perform.
            </p>
        </div>
    </div>
</section>
    </ScrollableAnchor>

    {/*Subscription Section*/}
    <ScrollableAnchor id="scroll_subscription">
    <section id="subscription" className="content-section text-left">
        <div className="subscription-section">
           <table width="100%">
               <tbody>
               <tr>
                   <td width="33%" style={{verticalAlign:'top'}}>
                       <ol style={{
                           background: 'white',
                           padding: '50px',
                           margin: '50px',
                           color: 'black',
                           textAlign: 'left',
                           maxWidth: '350px'
                       }}>
                           <li>
                               <i></i>
                               <a href="/register#top"><h4>Account Setup</h4></a>
                               <p>Register your clouDezk Security Dezk account with your details.</p>
                           </li>
                           <li>
                               <i></i>
                               <a href="/#"><h4>Subscribe to one of our Plans</h4></a>
                               <p>Subscribe to one of our affordable Plans</p>
                           </li>
                           <li>
                               <i></i>
                               <a href="/rolelink#top"><h4>Create Role for Account Access</h4></a>
                               <p>Create an AWS IAM role granting cloudDezk ReadOnly privileges</p>
                           </li>
                           <li>
                               <i></i>
                               <a href="#"><h4>Connect and view your own Security cloudDezk</h4></a>
                               <p>Create an AWS IAM role granting cloudDezk Security ReaOnly privileges</p>
                           </li>
                       </ol>
                   </td>
                   <td width="67%">
                       <div className="container">
                               <h2 className="inverted">CLOUDDEZK SUBSCRIPTIONS</h2>
                               <p>
                                   You can subscribe to CloudDezk security products by choosing one of our affordable subscription plans.
                               </p>
                               {
                                   plans.map(function(r,i) {

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
                   </td>
               </tr>
               </tbody>
           </table>
        </div>
</section>
</ScrollableAnchor>

    {/*Contact Section*/}
<ScrollableAnchor id="scroll_contact">
<section id="contact" className="container content-section text-left">
    <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
            <h2>Contact CloudDezk</h2>
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
    </div>
</section>
</ScrollableAnchor>
</div>
);

export default Page_Landing1;
