const express = require('express');
const config = require('config');
const app = express();
const port = config.get('port');
const path = require('path');
const router = express.Router();
const bodyParser = require('body-parser');



app.use(express.static('dist'));

//xhr allow
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
// handle all other requests and route them back to the homepage

const { newCustomerRegister, newCustomerAccount } = require('./routes/newCustomer.js');
router.all('/newCustomerRegister', newCustomerRegister);
router.all('/newCustomerAccount', newCustomerAccount);

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`listening at ${port}`);
})

module.exports = { app }; 
