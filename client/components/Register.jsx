import React from 'react'
import { COUNTRIES, FUNC, CustomerFUNC } from '../util';
import { Link } from 'react-router-dom';
import RoleLink from './RoleLink.jsx';
import Connect from './Connect.jsx';
import Subscription from './Subscription.jsx';


class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 'account-setup',
      customerid: null
    }
    this.handleChange = this.handleChange.bind(this);
  }
  isActive(menu) {
    return (this.state.active === menu)?'active':''
  }
  handleChange(v) {
    this.setState(v)
  }
  render () {
    let displayForm = null;
    switch (this.state.active) {
      case 'account-setup':
        displayForm = <CreateAccount handleChange={ this.handleChange } />
        break;
      case 'access':
        displayForm = <RoleLink handleChange={ this.handleChange } customerid={ this.state.customerid } />
        break;
      case 'connect':
        displayForm = <Connect />
        break;
      case 'subscription':
        displayForm = <Subscription />
        break;
      default:
        displayForm = <CreateAccount handleChange={ this.handleChange } />
        break;
    }
    return (
    <div className="container" style={{marginTop:'90px'}}>
        <div id="sub-nav">
          <ul>
            <li className={this.isActive('account-setup')}>
              <a href="javascript:;" onClick={() => this.handleChange({active:'account-setup'}) }>1. ACCOUNT SETUP</a>
            </li>
            <li className={this.isActive('subscription')}>
              <a href="javascript:;" onClick={() => this.handleChange({active:'subscription'}) }>2. SUBSCRIBE A PLAN</a>
            </li>
            <li className={this.isActive('access')}>
              <a href="javascript:;" onClick={() => this.handleChange({active:'access'}) }>3. CREATE ACCESS</a>
            </li>
            <li className={this.isActive('connect')}>
              <a href="javascript:;" onClick={() => this.handleChange({active:'connect'})}>4. CONNECT</a>
            </li>
          </ul>
        </div>
        {displayForm}

    </div>
    )
  }
}


class CreateAccount extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName:'',
          email:'',
          phoneNumber:'',
          company:'',
          country:'',
          password:'',
          confirmPassword:'',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
  }


    handleSubmit(e) {
        e.preventDefault(); //cancel href if have

        const {firstName, lastName, email, phoneNumber, company, country, password } = this.state;
            CustomerFUNC.newCustomerRegister({ firstName, lastName, email, phoneNumber, company, country, password })
                .then((res) => {
                    if (res.data) {
                        if (res.data.CustomerId) {
                            console.log('register successful');
                            this.props.handleChange({active:'subscription', customerid:res.data.CustomerId})
                        } else {
                            console.log(res.data.error, 'error');
                        }
                    } else {
                        console.log('internal server error');
                    }
                })
                .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="register-form">
        <div className="sub-nav-details">Create your CloudDezk security account.</div>
        <form onSubmit={ this.handleSubmit }>
            {/*FirstName*/}
            <div className="row">
            <div className="form-group col-xs-6">
                <label htmlFor="fname" className="control-label">First Name:</label>
                <input className="form-control" id="fname" placeholder="First Name"
                       name="firstName" data-toggle="tooltip" title="Enter your first name"
                       data-placement="right"
                       value={this.state.firstName}
                       onChange={(e)=> this.setState({firstName: e.target.value}) }
                       required/>
                {!this.state.firstName ? <small className="bg-danger">
                    First name is required
                </small>:''}
            </div>
            {/*<LastName*/}
            <div className="form-group col-xs-6">
                <label htmlFor="lname" className="control-label">Last Name:</label>
                <input className="form-control" id="lname" placeholder="Last Name"
                       name="lastName"
                       data-toggle="tooltip"
                       title="Enter your last name"
                       data-placement="right"
                       value={this.state.lastName}
                       onChange={(e)=> this.setState({lastName: e.target.value}) }
                       required/>
                {!this.state.lastName ? <small className="bg-danger">
                    Last name is required
                </small>:''}
            </div>
            </div>
                {/*Email*/}
                <div className="row">
                <div className="form-group  col-xs-6">
                <label htmlFor="email" className="control-label">Email:</label>
                <input className="form-control" id="email" placeholder="Email Confirm"
                       name="email"
                       data-toggle="tooltip"
                       title="Enter your email"
                       data-placement="right"
                       value={this.state.email}
                       onChange={(e)=> this.setState({email: e.target.value}) }
                       required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
                {!this.state.email ? <small className="bg-danger">
                    Email is required
                </small>:''}
                {!FUNC.isInPattern(this.state.email,/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g) && this.state.email ? <small className="bg-danger">
                    Email is invalid
                </small>:''}
            </div>
            {/*PhoneNumber*/}
            <div className="form-group col-xs-6">
                <label htmlFor="phone" className="control-label">Phone number:</label>
                <input className="form-control" id="phone" placeholder="Phone number"
                       name="phoneNumber"
                       data-toggle="tooltip"
                       title="Enter your phone number"
                       data-placement="right"
                       value={this.state.phoneNumber}
                       onChange={(e)=> this.setState({phoneNumber: e.target.value}) }
                       required pattern="[0-9]{3,12}$"/>
                {!this.state.phoneNumber ? <small className="bg-danger">
                    Phone number is required
                </small>:''}
                {!FUNC.isInPattern(this.state.phoneNumber,/[0-9]{3,12}$/g) && this.state.phoneNumber ? <small className="bg-danger">
                    Phone number is invalid
                </small>:''}

            </div>
                </div>
                <div className="row">
            {/*Company*/}
            <div className="form-group col-xs-6">
                <label htmlFor="company" className="control-label">Company:</label>
                <input className="form-control" id="company" placeholder="Company"
                       name="company"
                       data-toggle="tooltip"
                       title="Enter your company name"
                       data-placement="right"
                       value={this.state.company}
                       onChange={(e)=> this.setState({company: e.target.value}) }
                       required/>
                {!this.state.company ? <small className="bg-danger">
                    Company is required
                </small>:''}
            </div>
            {/*Country*/}
            <div className="form-group col-xs-6">
                <label htmlFor="country" className="control-label">Country:</label>
                <select className="form-control" id="country" placeholder="Country"
                        name="country"
                        data-toggle="tooltip"
                        title="Enter your country"
                        data-placement="right"
                        value={this.state.country}
                        onChange={(e)=> this.setState({country: e.target.value}) }
                        required>
                    {
                        COUNTRIES.map(function(r,i) {
                            return <option key={i} value={r.value}>{r.viewValue}</option>
                        })
                    }
                </select>
                {!this.state.country ? <small className="bg-danger">
                    Country is required
                </small>:''}
            </div>
                </div>
                <div className="row">
                    {/*Password */}
            <div className="form-group col-xs-6">
                <label htmlFor="password" className="control-label">Password:</label>
                <input className="form-control" type="password" id="password" placeholder="Password"
                       name="password"
                       data-toggle="tooltip"
                       title="Enter your password"
                       data-placement="right"
                       value={this.state.password}
                       onChange={(e)=> this.setState({password: e.target.value}) }
                       required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                {!this.state.password ? <small className="bg-danger">
                    Password is required
                </small>:''}
                {!FUNC.isInPattern(this.state.password,/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g) && this.state.password ? <small className="bg-danger">
                    Must contain at least one number and one uppercase and lowercase letter, and at least 8 or
                    more characters
                </small>:''}

            </div>

            {/*Password Confirmation */}
            <div className="form-group col-xs-6">
                <label htmlFor="confirmPassword" className="control-label">Confirm password:</label>
                <input className="form-control" type="password" id="confirmPassword" placeholder="Confirm password"
                       name="confirmPassword"
                       data-toggle="tooltip"
                       title="Confirm your password"
                       data-placement="right"
                       value={this.state.confirmPassword}
                       onChange={(e)=> this.setState({confirmPassword: e.target.value}) }
                       required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
                {!this.state.confirmPassword ? <small className="bg-danger">
                    Password is required
                </small>:''}
                {this.state.confirmPassword!=this.state.password && this.state.confirmPassword ? <small className="bg-danger">
                    Does not match with source password
                </small>:''}
            </div>
                </div>
            <span className="pull-right"><button className="btn btn-info" type="submit">Submit</button></span>
        </form>
      </div>
    )
  }
}

export default Register;
