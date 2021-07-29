const express = require('express');
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

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT:${PORT}`)
})

module.exports = app;
