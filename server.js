const express = require('express');
const config = require('config');
const app = express();
const port = config.get('port');
const path = require('path');

app.use(express.static('dist'));
  
app.get('*', (req, res) => {
 // console.log(path.resolve(__dirname, 'dist', 'index.html'));
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port, '0.0.0.0', () => {
  console.log(`listening at ${port}`);
})

module.exports = { app }; 
