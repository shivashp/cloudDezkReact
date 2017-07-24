const {db} = require('../connection.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const newCustomerRegister = (req, res) => {

    const { firstName, lastName, email, phoneNumber, company, country, password} = req.body;

    /*
     Request Payload
     {firstName: "qqqq", lastName: "Сq", email: "test@email.com", phoneNumber: "9126666143", company: "qqq",…}
     country  email  firstName  lastName  password  phoneNumber }
     */

    /*
     Table: customer
     Fields:
     FirstName varchar(30)
     LastName varchar(30)
     PhoneNumber varchar(30)
     Company varchar(30)
     Password varchar(200)
     PasswordConfirmation varchar(200)
     Email varchar(60)
     City varchar(50)
     State varchar(30)
     Country varchar(30)
     Access tinyint(1)
     */

    db('customer').select().where('Email', email)
        .then(results => {
            if (results.length) {
                res.json({error: 'existingClient'})
            } else {
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    }
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            console.log(err);
                            throw err;
                        }
                        db('customer').insert({
                            FirstName: firstName,
                            LastName: lastName,
                            PhoneNumber: phoneNumber,
                            Company: company,
                            Password: hash,
                            Email: email,
                            City: null,
                            State: null,
                            Country: country,
                            Access: 0
                        })
                            .then((idArray) => res.json({CustomerId: idArray[0]})) //mysql just returns the first id in array format
                            .catch((err) => {
                                console.log(err);
                                res.send(500);
                            });
                    });
                });
            }
        });

};

const newCustomerAccount = (req, res) => {

    const { customerid,  accountid, region, arn, externalid, awslink} = req.body;

    //const customerid=4; //we need to take it from session when customer will register

    /*
     Request Payload
     { customerid, region, arn, externalid, awslink }

     /*
     Table: customer_account
     CustomerAccountId int(11) AI PK
     CustomerId int(11)
     AccountId int(11)
     ExternalId varchar(100)
     RoleARN varchar(250)
     RegionName varchar(45)
     */

    db('customer_account').select().where('CustomerId', customerid)
        .then(results => {
            if (results.length) {

                db('customer_account').where({customerid: customerid}).update({
                    AccountId: accountid,
                    ExternalId: externalid,
                    RegionName: region,
                    RoleARN: arn,
                }).then((idArray) => res.json({CustomerAccountId: idArray[0]})) //mysql just returns the first id in array format
                    .catch((err) => {
                        console.log(err);
                        res.send(500);
                    });

            } else {
                db('customer_account').insert({
                    CustomerId: customerid,
                    AccountId: accountid,
                    ExternalId: externalid,
                    RegionName: region,
                    RoleARN: arn,

                })
                    .then((idArray) => res.json({CustomerAccountId: idArray[0]})) //mysql just returns the first id in array format
                    .catch((err) => {
                        console.log(err);
                        res.send(500);
                    });
            }
        });

};


module.exports = {
    newCustomerRegister, newCustomerAccount
};
