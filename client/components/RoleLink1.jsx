import React from 'react';
import JSONPretty from 'react-json-pretty';

const regions= [
    {viewValue: "---", value: ""},
    {viewValue:'ap-northeast-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'ap-northeast-2',value:'ec2.ap-northeast-2.amazonaws.com'},
    {viewValue:'ap-south-1',value:'ec2.ap-south-1.amazonaws.com'},
    {viewValue:'ap-southeast-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'ap-southeast-2',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'ca-central-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'eu-central-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'eu-west-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'eu-west-2',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'us-east-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'us-east-2',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'us-west-1',value:'ec2.ap-northeast-1.amazonaws.com'},
    {viewValue:'us-west-2',value:'ec2.ap-northeast-1.amazonaws.com'},
];


    class RoleLink1  extends React.Component {

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

        render() {
            return <div className="container" style={{marginTop:'90px'}}>
                <table width="100%" >
                    <tbody>
                    <tr>
                        <td width="33%" style={{verticalAlign:'top'}}>
                            <ol style={{paddingRight: '25%'}}>
                                <li>
                                    <i></i>
                                    <a href="/register#top"><h4>Account Setup</h4></a>
                                    <p>Register your clouDezk Security Dezk account with your details.</p>
                                </li>
                                <li>
                                    <i></i>
                                    <a href="/#scroll_subscription"><h4>Subscribe to one of our Plans</h4></a>
                                    <p>Subscribe to one of our affordable Plans</p>
                                </li>
                                <li>
                                    <i></i>
                                    <a href="#"><h4>Create Role for Account Access</h4></a>
                                    <p>Create an AWS IAM role granting cloudDezk ReadOnly privileges</p>
                                </li>
                                <li>
                                    <i></i>
                                    <a href="#"><h4>Connect and view your own Security cloudDezk</h4></a>
                                    <p>Create an AWS IAM role granting cloudDezk Security ReaOnly privileges</p>
                                </li>
                            </ol>
                        </td>
                        <td width="33%" style={{verticalAlign:'top'}}>
                            <form>
                                {/*accountid*/}
                                <div className="form-group">
                                    <label htmlFor="accountid" className="control-label">Account Id:</label>
                                    <input className="form-control" id="accountid" placeholder="Account Id"
                                           name="accountid"
                                           data-toggle="tooltip" title="Enter your account id" data-placement="right"
                                           value={this.state.accountid}
                                           onChange={(e)=> this.setState({accountid: e.target.value}) }
                                           required/>
                                    {!this.state.accountid ? <small className="bg-danger">
                                        Account id is required
                                    </small>:''}
                                </div>
                                {/*regions*/}
                                <div className="form-group">
                                    <label htmlFor="region" className="control-label">Region:</label>
                                    <select className="form-control" id="region" placeholder="Region"
                                            name="region"
                                            data-toggle="tooltip"
                                            title="Enter your region"
                                            data-placement="right"
                                            value={this.state.region}
                                            onChange={(e)=> this.setState({region: e.target.value}) }
                                            required>
                                        {
                                            regions.map(function (r, i) {
                                                return <option key={i} value={r.value}>{r.viewValue}</option>
                                            })
                                        }
                                    </select>
                                    {!this.state.region ? <small className="bg-danger">
                                        Region is required
                                    </small>:''}
                                </div>
                                {/*arn*/}
                                <div className="form-group">
                                    <label htmlFor="arn" className="control-label">ARN:</label>
                                    <input className="form-control" id="arn" placeholder="Account Id"
                                           name="arn" data-toggle="tooltip" title="Enter your arn"
                                           data-placement="right"
                                           value={this.state.arn}
                                           onChange={(e)=> this.setState({arn: e.target.value}) }
                                           required/>
                                    {!this.state.arn ? <small className="bg-danger">
                                        Arn is required
                                    </small>:''}

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
                                    {!this.state.externalid ? <small className="bg-danger">
                                        External id is required
                                    </small>:''}

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

                                <span className="pull-right"><button className="btn btn-info">Submit</button></span>
                            </form>
                        </td>
                        <td width="33%" style={{verticalAlign:'top'}}>
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
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        }
};

export default RoleLink1;
