const express = require('express');
const path = require('path');
const mongoose = require('mongoose');


const charityController = require('./charityController');

const PORT = 3000;

const app = express();


app.get('/data', charityController.getAllUsers, (req, res) => {

    /**
    * Since we set `ejs` to be the view engine above, `res.render` will parse the
    * template page we pass it (in this case 'client/secret.ejs') as ejs and produce
    * a string of proper HTML which will be sent to the client!
    */
    
    res.status(200).json(res.locals.users)
  
  });


app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`)
})

module.exports = app;
