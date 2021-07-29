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
    res.status(200).json(res.locals.users)
  });

app.post('/findFriend', charityController.findFriend, (req, res) => {    
    console.log('entered into app.get find friend')
    res.status(200).json(res.locals.users)
  });

app.post('/newFriend', charityController.postNewFriend, (req, res) => {
    console.log('app.post accessed')
    res.status(200)
})

app.delete('/deleteFriend', charityController.deleteFriend, (req, res) => {
    console.log('App delete accessed')
    res.status(200)
})


app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`)
})

module.exports = app;
