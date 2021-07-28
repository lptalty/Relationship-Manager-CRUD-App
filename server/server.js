const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors')

const charityController = require('./charityController');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/data', charityController.getAllUsers, (req, res) => {

    /**
    * Since we set `ejs` to be the view engine above, `res.render` will parse the
    * template page we pass it (in this case 'client/secret.ejs') as ejs and produce
    * a string of proper HTML which will be sent to the client!
    */
    
    res.status(200).json(res.locals.users)
  
  });

app.post('/newFriend', charityController.postNewFriend, (req, res) => {
    console.log('app.post accessed')
    res.status(200)
})


app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`)
})

module.exports = app;
