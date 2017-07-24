import React from 'react';


const countries= [
    {viewValue: "---", value: ""},
    {viewValue: "Afghanistan", value: "AF"},
    {viewValue: "Aland Islands", value: "AX"},
    {viewValue: "Albania", value: "AL"},
    {viewValue: "Algeria", value: "DZ"},
    {viewValue: "American Samoa", value: "AS"},
    {viewValue: "AndorrA", value: "AD"},
    {viewValue: "Angola", value: "AO"},
    {viewValue: "Anguilla", value: "AI"},
    {viewValue: "Antarctica", value: "AQ"},
    {viewValue: "Antigua and Barbuda", value: "AG"},
    {viewValue: "Argentina", value: "AR"},
    {viewValue: "Armenia", value: "AM"},
    {viewValue: "Aruba", value: "AW"},
    {viewValue: "Australia", value: "AU"},
    {viewValue: "Austria", value: "AT"},
    {viewValue: "Azerbaijan", value: "AZ"},
    {viewValue: "Bahamas", value: "BS"},
    {viewValue: "Bahrain", value: "BH"},
    {viewValue: "Bangladesh", value: "BD"},
    {viewValue: "Barbados", value: "BB"},
    {viewValue: "Belarus", value: "BY"},
    {viewValue: "Belgium", value: "BE"},
    {viewValue: "Belize", value: "BZ"},
    {viewValue: "Benin", value: "BJ"},
    {viewValue: "Bermuda", value: "BM"},
    {viewValue: "Bhutan", value: "BT"},
    {viewValue: "Bolivia", value: "BO"},
    {viewValue: "Bosnia and Herzegovina", value: "BA"},
    {viewValue: "Botswana", value: "BW"},
    {viewValue: "Bouvet Island", value: "BV"},
    {viewValue: "Brazil", value: "BR"},
    {viewValue: "British Indian Ocean Territory", value: "IO"},
    {viewValue: "Brunei Darussalam", value: "BN"},
    {viewValue: "Bulgaria", value: "BG"},
    {viewValue: "Burkina Faso", value: "BF"},
    {viewValue: "Burundi", value: "BI"},
    {viewValue: "Cambodia", value: "KH"},
    {viewValue: "Cameroon", value: "CM"},
    {viewValue: "Canada", value: "CA"},
    {viewValue: "Cape Verde", value: "CV"},
    {viewValue: "Cayman Islands", value: "KY"},
    {viewValue: "Central African Republic", value: "CF"},
    {viewValue: "Chad", value: "TD"},
    {viewValue: "Chile", value: "CL"},
    {viewValue: "China", value: "CN"},
    {viewValue: "Christmas Island", value: "CX"},
    {viewValue: "Cocos (Keeling) Islands", value: "CC"},
    {viewValue: "Colombia", value: "CO"},
    {viewValue: "Comoros", value: "KM"},
    {viewValue: "Congo", value: "CG"},
    {viewValue: "Congo, The Democratic Republic of the", value: "CD"},
    {viewValue: "Cook Islands", value: "CK"},
    {viewValue: "Costa Rica", value: "CR"},
    {viewValue: "Cote d'Ivoire", value: "CI"},
    {viewValue: "Croatia", value: "HR"},
    {viewValue: "Cuba", value: "CU"},
    {viewValue: "Cyprus", value: "CY"},
    {viewValue: "Czech Republic", value: "CZ"},
    {viewValue: "Denmark", value: "DK"},
    {viewValue: "Djibouti", value: "DJ"},
    {viewValue: "Dominica", value: "DM"},
    {viewValue: "Dominican Republic", value: "DO"},
    {viewValue: "Ecuador", value: "EC"},
    {viewValue: "Egypt", value: "EG"},
    {viewValue: "El Salvador", value: "SV"},
    {viewValue: "Equatorial Guinea", value: "GQ"},
    {viewValue: "Eritrea", value: "ER"},
    {viewValue: "Estonia", value: "EE"},
    {viewValue: "Ethiopia", value: "ET"},
    {viewValue: "Falkland Islands (Malvinas)", value: "FK"},
    {viewValue: "Faroe Islands", value: "FO"},
    {viewValue: "Fiji", value: "FJ"},
    {viewValue: "Finland", value: "FI"},
    {viewValue: "France", value: "FR"},
    {viewValue: "French Guiana", value: "GF"},
    {viewValue: "French Polynesia", value: "PF"},
    {viewValue: "French Southern Territories", value: "TF"},
    {viewValue: "Gabon", value: "GA"},
    {viewValue: "Gambia", value: "GM"},
    {viewValue: "Georgia", value: "GE"},
    {viewValue: "Germany", value: "DE"},
    {viewValue: "Ghana", value: "GH"},
    {viewValue: "Gibraltar", value: "GI"},
    {viewValue: "Greece", value: "GR"},
    {viewValue: "Greenland", value: "GL"},
    {viewValue: "Grenada", value: "GD"},
    {viewValue: "Guadeloupe", value: "GP"},
    {viewValue: "Guam", value: "GU"},
    {viewValue: "Guatemala", value: "GT"},
    {viewValue: "Guernsey", value: "GG"},
    {viewValue: "Guinea", value: "GN"},
    {viewValue: "Guinea-Bissau", value: "GW"},
    {viewValue: "Guyana", value: "GY"},
    {viewValue: "Haiti", value: "HT"},
    {viewValue: "Heard Island and Mcdonald Islands", value: "HM"},
    {viewValue: "Holy See (Vatican City State)", value: "VA"},
    {viewValue: "Honduras", value: "HN"},
    {viewValue: "Hong Kong", value: "HK"},
    {viewValue: "Hungary", value: "HU"},
    {viewValue: "Iceland", value: "IS"},
    {viewValue: "India", value: "IN"},
    {viewValue: "Indonesia", value: "ID"},
    {viewValue: "Iran, Islamic Republic Of", value: "IR"},
    {viewValue: "Iraq", value: "IQ"},
    {viewValue: "Ireland", value: "IE"},
    {viewValue: "Isle of Man", value: "IM"},
    {viewValue: "Israel", value: "IL"},
    {viewValue: "Italy", value: "IT"},
    {viewValue: "Jamaica", value: "JM"},
    {viewValue: "Japan", value: "JP"},
    {viewValue: "Jersey", value: "JE"},
    {viewValue: "Jordan", value: "JO"},
    {viewValue: "Kazakhstan", value: "KZ"},
    {viewValue: "Kenya", value: "KE"},
    {viewValue: "Kiribati", value: "KI"},
    {viewValue: "Korea, Democratic People'S Republic of", value: "KP"},
    {viewValue: "Korea, Republic of", value: "KR"},
    {viewValue: "Kuwait", value: "KW"},
    {viewValue: "Kyrgyzstan", value: "KG"},
    {viewValue: "Lao People'S Democratic Republic", value: "LA"},
    {viewValue: "Latvia", value: "LV"},
    {viewValue: "Lebanon", value: "LB"},
    {viewValue: "Lesotho", value: "LS"},
    {viewValue: "Liberia", value: "LR"},
    {viewValue: "Libyan Arab Jamahiriya", value: "LY"},
    {viewValue: "Liechtenstein", value: "LI"},
    {viewValue: "Lithuania", value: "LT"},
    {viewValue: "Luxembourg", value: "LU"},
    {viewValue: "Macao", value: "MO"},
    {viewValue: "Macedonia, The Former Yugoslav Republic of", value: "MK"},
    {viewValue: "Madagascar", value: "MG"},
    {viewValue: "Malawi", value: "MW"},
    {viewValue: "Malaysia", value: "MY"},
    {viewValue: "Maldives", value: "MV"},
    {viewValue: "Mali", value: "ML"},
    {viewValue: "Malta", value: "MT"},
    {viewValue: "Marshall Islands", value: "MH"},
    {viewValue: "Martinique", value: "MQ"},
    {viewValue: "Mauritania", value: "MR"},
    {viewValue: "Mauritius", value: "MU"},
    {viewValue: "Mayotte", value: "YT"},
    {viewValue: "Mexico", value: "MX"},
    {viewValue: "Micronesia, Federated States of", value: "FM"},
    {viewValue: "Moldova, Republic of", value: "MD"},
    {viewValue: "Monaco", value: "MC"},
    {viewValue: "Mongolia", value: "MN"},
    {viewValue: "Montserrat", value: "MS"},
    {viewValue: "Morocco", value: "MA"},
    {viewValue: "Mozambique", value: "MZ"},
    {viewValue: "Myanmar", value: "MM"},
    {viewValue: "Namibia", value: "NA"},
    {viewValue: "Nauru", value: "NR"},
    {viewValue: "Nepal", value: "NP"},
    {viewValue: "Netherlands", value: "NL"},
    {viewValue: "Netherlands Antilles", value: "AN"},
    {viewValue: "New Caledonia", value: "NC"},
    {viewValue: "New Zealand", value: "NZ"},
    {viewValue: "Nicaragua", value: "NI"},
    {viewValue: "Niger", value: "NE"},
    {viewValue: "Nigeria", value: "NG"},
    {viewValue: "Niue", value: "NU"},
    {viewValue: "Norfolk Island", value: "NF"},
    {viewValue: "Northern Mariana Islands", value: "MP"},
    {viewValue: "Norway", value: "NO"},
    {viewValue: "Oman", value: "OM"},
    {viewValue: "Pakistan", value: "PK"},
    {viewValue: "Palau", value: "PW"},
    {viewValue: "Palestinian Territory, Occupied", value: "PS"},
    {viewValue: "Panama", value: "PA"},
    {viewValue: "Papua New Guinea", value: "PG"},
    {viewValue: "Paraguay", value: "PY"},
    {viewValue: "Peru", value: "PE"},
    {viewValue: "Philippines", value: "PH"},
    {viewValue: "Pitcairn", value: "PN"},
    {viewValue: "Poland", value: "PL"},
    {viewValue: "Portugal", value: "PT"},
    {viewValue: "Puerto Rico", value: "PR"},
    {viewValue: "Qatar", value: "QA"},
    {viewValue: "Reunion", value: "RE"},
    {viewValue: "Romania", value: "RO"},
    {viewValue: "Russian Federation", value: "RU"},
    {viewValue: "RWANDA", value: "RW"},
    {viewValue: "Saint Helena", value: "SH"},
    {viewValue: "Saint Kitts and Nevis", value: "KN"},
    {viewValue: "Saint Lucia", value: "LC"},
    {viewValue: "Saint Pierre and Miquelon", value: "PM"},
    {viewValue: "Saint Vincent and the Grenadines", value: "VC"},
    {viewValue: "Samoa", value: "WS"},
    {viewValue: "San Marino", value: "SM"},
    {viewValue: "Sao Tome and Principe", value: "ST"},
    {viewValue: "Saudi Arabia", value: "SA"},
    {viewValue: "Senegal", value: "SN"},
    {viewValue: "Serbia and Montenegro", value: "CS"},
    {viewValue: "Seychelles", value: "SC"},
    {viewValue: "Sierra Leone", value: "SL"},
    {viewValue: "Singapore", value: "SG"},
    {viewValue: "Slovakia", value: "SK"},
    {viewValue: "Slovenia", value: "SI"},
    {viewValue: "Solomon Islands", value: "SB"},
    {viewValue: "Somalia", value: "SO"},
    {viewValue: "South Africa", value: "ZA"},
    {viewValue: "South Georgia and the South Sandwich Islands", value: "GS"},
    {viewValue: "Spain", value: "ES"},
    {viewValue: "Sri Lanka", value: "LK"},
    {viewValue: "Sudan", value: "SD"},
    {viewValue: "Suriname", value: "SR"},
    {viewValue: "Svalbard and Jan Mayen", value: "SJ"},
    {viewValue: "Swaziland", value: "SZ"},
    {viewValue: "Sweden", value: "SE"},
    {viewValue: "Switzerland", value: "CH"},
    {viewValue: "Syrian Arab Republic", value: "SY"},
    {viewValue: "Taiwan, Province of China", value: "TW"},
    {viewValue: "Tajikistan", value: "TJ"},
    {viewValue: "Tanzania, United Republic of", value: "TZ"},
    {viewValue: "Thailand", value: "TH"},
    {viewValue: "Timor-Leste", value: "TL"},
    {viewValue: "Togo", value: "TG"},
    {viewValue: "Tokelau", value: "TK"},
    {viewValue: "Tonga", value: "TO"},
    {viewValue: "Trinidad and Tobago", value: "TT"},
    {viewValue: "Tunisia", value: "TN"},
    {viewValue: "Turkey", value: "TR"},
    {viewValue: "Turkmenistan", value: "TM"},
    {viewValue: "Turks and Caicos Islands", value: "TC"},
    {viewValue: "Tuvalu", value: "TV"},
    {viewValue: "Uganda", value: "UG"},
    {viewValue: "Ukraine", value: "UA"},
    {viewValue: "United Arab Emirates", value: "AE"},
    {viewValue: "United Kingdom", value: "GB"},
    {viewValue: "United States", value: "US"},
    {viewValue: "United States Minor Outlying Islands", value: "UM"},
    {viewValue: "Uruguay", value: "UY"},
    {viewValue: "Uzbekistan", value: "UZ"},
    {viewValue: "Vanuatu", value: "VU"},
    {viewValue: "Venezuela", value: "VE"},
    {viewValue: "Viet Nam", value: "VN"},
    {viewValue: "Virgin Islands, British", value: "VG"},
    {viewValue: "Virgin Islands, U.S.", value: "VI"},
    {viewValue: "Wallis and Futuna", value: "WF"},
    {viewValue: "Western Sahara", value: "EH"},
    {viewValue: "Yemen", value: "YE"},
    {viewValue: "Zambia", value: "ZM"},
    {viewValue: "Zimbabwe", value: "ZW"}
];

class Register1  extends React.Component {
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
    }

    render() {

    function isinPattern(v,p) {
            "use strict";
            return p.test(v);
    }

        return <div className="container" style={{marginTop:'90px'}}>
    <table width="100%">
            <tbody>
            <tr>
                <td width="33%"  style={{verticalAlign:'top'}}>
                    <ol style={{paddingRight: '25%'}}>
                        <li>
                            <i></i>
                            <a href="#"><h4>Account Setup</h4></a>
                            <p>Register your clouDezk Security Dezk account with your details.</p>
                        </li>
                        <li>
                            <i></i>
                            <a href="/#scroll_subscription"><h4>Subscribe to one of our Plans</h4></a>
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
                <td width="67%"  style={{verticalAlign:'top'}}>
                    <form>
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
                        {!isinPattern(this.state.email,/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/g) && this.state.email ? <small className="bg-danger">
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
                        {!isinPattern(this.state.phoneNumber,/[0-9]{3,12}$/g) && this.state.phoneNumber ? <small className="bg-danger">
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
                                countries.map(function(r,i) {
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
                        {!isinPattern(this.state.password,/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/g) && this.state.password ? <small className="bg-danger">
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
                    <span className="pull-right"><button className="btn btn-info">Submit</button></span>
                </form>
            </td>
            {/*<td width="33%">*/}
                {/*&nbsp;*/}
            {/*</td>*/}
        </tr>
            </tbody>
    </table>
</div>
    }
}

;
export default Register1;
