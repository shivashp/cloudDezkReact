import React from 'react';
import { REGIONS } from '../util';
import JSONPretty from 'react-json-pretty';

class RoleLink extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          accountid: '',
          region:'',
          arn:'',
          externalid:'279f3881-fd28-40db-894d-6336b7b64821',
          awslink:'https://us-west-2.console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks?filter=active'
      };
  }
  render () {
    return (
      <div className="register-form">
        <div className="sub-nav-details">Create an AWS IAM role granting cloudDezk ReadOnly privileges.</div>
        <div className="role-content">
          <div className="role-form">
            <form>
                {/*accountid*/}
                <div className="form-group">
                    <label htmlFor="accountid" className="control-label">Account Id *</label>
                    <input className="form-control" id="accountid" placeholder="Account Id"
                           name="accountid"
                           data-toggle="tooltip" title="Enter your account id" data-placement="right"
                           value={this.state.accountid}
                           onChange={(e)=> this.setState({accountid: e.target.value}) }
                           required/>
                </div>
                {/*regions*/}
                <div className="form-group">
                    <label htmlFor="region" className="control-label">Region *</label>
                    <select className="form-control" id="region" placeholder="Region"
                            name="region"
                            data-toggle="tooltip"
                            title="Enter your region"
                            data-placement="right"
                            value={this.state.region}
                            onChange={(e)=> this.setState({region: e.target.value}) }
                            required>
                        {
                            REGIONS.map(function (r, i) {
                                return <option key={i} value={r.value}>{r.viewValue}</option>
                            })
                        }
                    </select>
                </div>
                {/*arn*/}
                <div className="form-group">
                    <label htmlFor="arn" className="control-label">ARN *</label>
                    <input className="form-control" id="arn" placeholder="Account Id"
                           name="arn" data-toggle="tooltip" title="Enter your arn"
                           data-placement="right"
                           value={this.state.arn}
                           onChange={(e)=> this.setState({arn: e.target.value}) }
                           required/>

                </div>
                {/*external id*/}
                <div className="form-group">
                    <label htmlFor="externalid" className="control-label">External Id:</label>
                    <input className="form-control" id="externalid" placeholder="External Id"
                           name="externalid" data-toggle="tooltip" title="Enter your external id"
                           data-placement="right"
                           value={this.state.externalid}
                           onChange={(e)=> this.setState({externalid: e.target.value}) }
                           readOnly={true}
                           required/>

                </div>
                {/*aws link*/}
                <div className="form-group">
                    <label htmlFor="awslink" className="control-label">AWS link:</label>
                    {this.state.awslink ? <div><a id="awslink" className="text-primary" href={this.state.awslink} >
                    {this.state.awslink}
                    </a></div>:''}

                    {/*<input className="form-control" id="awslink" placeholder="AWS link"*/}
                           {/*name="awslink" data-toggle="tooltip" title="Enter your aws link"*/}
                           {/*data-placement="right"*/}
                           {/*value={this.state.awslink}*/}
                           {/*onChange={(e)=> this.setState({awslink: e.target.value}) }*/}
                           {/*readOnly={true}*/}
                           {/*required/>*/}
                    {/*{this.state.awslink ? <small><a href={this.state.awslink} >*/}
                        {/*{this.state.awslink}*/}
                    {/*</a></small>:''}*/}

                    {/*{!this.state.awslink ? <small className="bg-danger">*/}
                        {/*Aws link is required*/}
                    {/*</small>:''}*/}

                </div>

                <span>* Mandatory fields</span><span className="pull-right"><button className="btn btn-info">Submit</button></span>
            </form>
          </div>{/* Role-form */}
          <div className="role-instructions">
            <div style={{paddingLeft: '25%'}}>
                <h4>Setup Instructions</h4>
                <ul>
                    <li>Enter your Account Id</li>
                    <li>Enter your Region</li>
                    <li>Copy the cloud formation template below and run it from the AWS Link provided</li>
                    <li>After your cloudformation is executed in the outputs please copy the arn of the role and paste it in the ARN field</li>
                    <li>Hit Submit to link your account to CloudDezk</li>
                </ul>

                <h6 style={{paddingTop: '30px'}}>CLOUD FORMATION TEMPLATE</h6>
                <JSONPretty style={{
                    height: '70vh',
                    display: 'block',
                    margin: 0,
                    padding: 0,
                    maxWidth: '400px'
                }} json={{
                        "AWSTemplateFormatVersion" : "2010-09-09",

                        "Description" : "AWS CloudFormation that creates CloudDezk Role with Amazon Policy IAMReadOnly Access  and other policy simulator policies which are also simulating access only and no execution capability.",
                        "Parameters": {
                            "RoleName": {
                                "Type": "String",
                                "Description": "The name of the role CloudDezk will use.",
                                "MinLength": "1",
                                "MaxLength": "255",
                                "Default": "CloudDezkRole"
                            },
                            "TrustedAccountId": {
                                "Type": "String",
                                "Description": "The CloudDezk account this role will trust.",
                                "MinLength": "1",
                                "MaxLength": "255",
                                "Default": "621458204558"
                            },
                            "ExternalId": {
                                "Type": "String",
                                "Description": "The external identifier to use, given to you by CloudDezk",
                                "MinLength": "1",
                                "MaxLength": "255",
                                "Default": "279f3881-fd28-40db-894d-6336b7b64821"
                            }
                        },

                        "Resources": {
                            "CloudDeskCrossAccountRole": {
                                "Type": "AWS::IAM::Role",
                                "Properties": {
                                    "RoleName": "CloudDeskCrossAccountRole",
                                    "AssumeRolePolicyDocument": {
                                        "Version" : "2012-10-17",
                                        "Statement": [ {
                                            "Effect": "Allow",
                                            "Principal": {
                                                "AWS": {
                                                    "Fn::Join": [
                                                        ":",
                                                        [
                                                            "arn:aws:iam:",
                                                            {
                                                                "Ref": "TrustedAccountId"
                                                            },
                                                            "user/CloudDezk"
                                                        ]
                                                    ]
                                                }
                                            },
                                            "Action": [ "sts:AssumeRole" ],
                                            "Condition": {
                                                "StringEquals": {
                                                    "sts:ExternalId": {
                                                        "Ref": "ExternalId"
                                                    }
                                                }
                                            }
                                        } ]
                                    },
                                    "Path": "/",
                                    "ManagedPolicyArns": [ "arn:aws:iam::aws:policy/IAMReadOnlyAccess" ],
                                    "Policies": [   {
                                        "PolicyName": "iam-allow-policy-simulator-access",
                                        "PolicyDocument": {
                                            "Version" : "2012-10-17",
                                            "Statement": [ {
                                                "Effect": "Allow",
                                                "Action": "*",
                                                "Resource": "*"
                                            }
                                            ]
                                        }
                                    },

                                        {
                                            "PolicyName" : "iam-allow-policy-simulator-api-access",
                                            "PolicyDocument": {
                                                "Version": "2012-10-17",
                                                "Statement": [{
                                                    "Action": [
                                                        "iam:GetContextKeysForCustomPolicy",
                                                        "iam:SimulateCustomPolicy"
                                                    ],
                                                    "Resource": "*",
                                                    "Effect": "Allow"
                                                }]
                                            }
                                        },


                                        {
                                            "PolicyName" : "iam-allow-policy-simulator-simulate-all-any-aws-account",
                                            "PolicyDocument": {
                                                "Version": "2012-10-17",
                                                "Statement": [{
                                                    "Action": [
                                                        "iam:GetContextKeysForCustomPolicy",
                                                        "iam:GetContextKeysForPrincipalPolicy",
                                                        "iam:SimulateCustomPolicy",
                                                        "iam:SimulatePrincipalPolicy"
                                                    ],
                                                    "Resource": "*",
                                                    "Effect": "Allow"
                                                }]
                                            }
                                        }



                                    ]
                                }
                            }
                        },

                        "Outputs":{
                            "RoleName":{
                                "Value":{
                                    "Ref":"RoleName"
                                },
                                "Description":"Role that is associated with Amazon ReadOnly IAM Policy and Policy Simulator Policies"
                            }
                        }
                    }}></JSONPretty>
            </div>
          </div>{ /* Role-instructions */}
        </div>{/* Role content */}
      </div>
    )
  }
}

export default RoleLink;
