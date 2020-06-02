const express = require('express');
const bodyParser = require('body-parser');

const NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config({
    path: `environment/.env`
});
console.log(process.env.SERVER_PORT);

// Intializations
const app = express();

app.set('port', process.env.SERVER_PORT);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/applications', require('./routes/applications'));

app.get('/', (req, res) => {
    
});
// Starting
app.listen(app.get('port'), () => {
    console.log('Server is in port', app.get('port'));
  });